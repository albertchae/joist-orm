import {
  AliasAssigner,
  ColumnCondition,
  deTagId,
  Entity,
  EntityMetadata,
  FindPlugin,
  JoinTable,
  ParsedFindQuery,
} from "joist-orm";
import { AuthRule, parseAuthRule, ParsedAuthRule } from "./authRule";

/**
 * Implements a `FindPlugin` that injects ReBAC-style auth rules into the query.
 */
export class RebacAuthPlugin<T extends Entity> implements FindPlugin {
  #rootMeta: EntityMetadata<T>;
  #rootId: string;
  #rules: Record<string, ParsedAuthRule<any>[]>;

  constructor(rootMeta: EntityMetadata<T>, rootId: string, rule: AuthRule<T>) {
    this.#rootMeta = rootMeta;
    this.#rootId = rootId;
    this.#rules = parseAuthRule(rootMeta, rule);
  }

  beforeFind(meta: EntityMetadata<any>, query: ParsedFindQuery): void {
    // How would we tell if this is loading an o2m like book -> reviews,
    // and a) we've already auth'd book, and b) reviews is included as
    // accessible, then we don't need to re-inject auth into the query.
    // Maybe `beforeFind` should be told the high-level operation being
    // performed, i.e `m2o`, `o2m`, etc.

    // Is this meta something we should scope?
    const rules = this.#rules[meta.cstr.name];
    if (!rules) return;
    // Work with just one rule for now
    const [rule] = rules;

    const aa = new AliasAssigner(query);
    const joins: JoinTable[] = [];

    // We've got basically a lens from `meta` --> our `rootMeta`, so we
    // want to add a WHERE clause
    let currentMeta = meta;
    let currentTable = query.tables.find((t) => t.join === "primary")!;

    // I.e. start at `Book`, and walk `author` -> `userOneToOne`
    for (const path of rule.pathToUser) {
      const field = currentMeta.allFields[path];
      // console.log(field);
      switch (field.kind) {
        case "m2o": {
          // Inject a new table for our new join
          // I.e. currentTable is `books` and we're looking at `Book.author`.
          currentTable = aa.findOrCreateManyToOneJoin(query, currentTable.alias, field);
          currentMeta = field.otherMetadata();
          break;
        }
        case "o2o": {
          // I.e. currentTable is 'authors' and we're looking at `Author.userOneToOne`
          currentTable = aa.findOrCreateOneToOneJoin(query, currentTable.alias, field);
          currentMeta = field.otherMetadata();
          break;
        }
        default:
          throw new Error(`Unsupported kind ${field.kind}`);
      }
    }

    const cond: ColumnCondition = {
      alias: currentTable.alias,
      column: "id",
      dbType: currentMeta.idDbType,
      cond: { kind: "eq", value: deTagId(this.#rootMeta, this.#rootId) },
    };
    if (!query.condition) {
      query.condition = { op: "and", conditions: [cond] };
    } else if (query.condition.op === "and") {
      query.condition.conditions.push(cond);
    } else {
      query.condition = {
        op: "and",
        conditions: [query.condition, cond],
      };
    }
    query.tables.push(...joins);

    // throw new Error(`Method not implemented ${rule.pathToUser.join("/")}`);
  }
}
