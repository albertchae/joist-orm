import { Entity, IdOf, OptsOf } from "./EntityManager";

/** Exposes a field's changed/original value in each entity's `this.changes` property. */
export interface FieldStatus<T> {
  /** True if the field has been changed on either create or update. */
  hasChanged: boolean;
  /** True only if the field has been updated i.e. not on the initial create. */
  hasUpdated: boolean;
  /** The original value, will be `undefined` if the entity new. */
  originalValue?: T;
}

type NullOrDefinedOr<T> = T | null | undefined;
type ExcludeNever<T> = Pick<T, { [P in keyof T]: T[P] extends never ? never : P }[keyof T]>;

/**
 * Creates the `this.changes.firstName` changes API for a given entity `T`.
 *
 * Specifically we use the fields from OptsOf but:
 *
 * - Exclude collections
 * - Convert entity types to id types to match what is stored in originalData
 */
export type Changes<T extends Entity> = { fields: (keyof OptsOf<T>)[] } & ExcludeNever<
  {
    [P in keyof OptsOf<T>]-?: OptsOf<T>[P] extends NullOrDefinedOr<infer U>
      ? U extends Array<infer E>
        ? E extends string
          ? FieldStatus<U>
          : never
        : U extends Entity
        ? FieldStatus<IdOf<U>>
        : FieldStatus<U>
      : never;
  }
>;

export function newChangesProxy<T extends Entity>(entity: T): Changes<T> {
  return new Proxy(entity, {
    get(target, p: PropertyKey): FieldStatus<any> | (keyof OptsOf<T>)[] {
      if (p === "fields") {
        return (
          entity.isNewEntity ? Object.keys(entity.__orm.data) : Object.keys(entity.__orm.originalData)
        ) as (keyof OptsOf<T>)[];
      } else if (typeof p === "symbol") {
        throw new Error(`Unsupported call to ${String(p)}`);
      }

      const originalValue = entity.__orm.originalData[p];
      const hasChanged = (entity.isNewEntity && p in entity.__orm.data) || p in entity.__orm.originalData;
      const hasUpdated = !entity.isNewEntity && p in entity.__orm.originalData;
      return { hasChanged, hasUpdated, originalValue };
    },
  }) as any;
}