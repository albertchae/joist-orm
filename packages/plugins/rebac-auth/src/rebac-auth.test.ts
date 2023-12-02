import { alias, getMetadata } from "joist-orm";
import { Book, User, finds, insertAuthor, insertBook, insertUser, newEntityManager } from "joist-tests-integration";
import { RebacAuthPlugin } from "./RebacAuthPlugin";
import { AuthRule, parseAuthRule } from "./authRule";

const um = getMetadata(User);
const r = "r";
const rw = "rw";
const i = "i";

// Should there be a single rule from the user -> everything they can see/do/touch?
// Or per-entity rules that are stitched together?
//
// Per-entity rules are more scalable, but loose "how did we get here" context
// (i.e. is it 'my book' or 'your book' depends on the FKs that were walked to get
// here) and also "what user is this?" I.e. to have per-user type rules, the per-entity
// rule would need to be parameterized by the user.
//
// A single per-user rule seems more able to "do one up-front query" i.e. to find
// Tasks the user can see, and then use the subrules to apply/check auth in memory.
//
// A single per-unit rule would be hard to adapt for a user that changes roles based
// on the scope, i.e. in Project A they're a super, but in Project B they're a PM.
// Granted, this seems odd but needs to be supported. With a single-user rule, these
// checked would move into `where { role: ... }` clauses within a giant "internal user"
// rule.
//
// A single per-unit rule is easy to know ahead-of-time, vs. a per-entity rule, we need
// to ask "what [tasks | books | authors] can this person see?" before even having
// "which task" loaded from the db.
const rule: AuthRule<User> = {
  email: r,
  name: rw,
  bio: rw,
  authorManyToOne: {
    // Support binding alias { as: m }
    where: { firstName: "u1" },
    books: {
      entity: "crud",
      title: rw,
      "*": rw,
      publish: i,
    },
  },
};

describe("rebac-auth", () => {
  it("can filter em.find with a new o2m join", async () => {
    // Given two authors with their own books
    await insertAuthor({ first_name: "a1" });
    await insertAuthor({ first_name: "a2" });
    await insertBook({ title: "b1", author_id: 1 });
    await insertBook({ title: "b2", author_id: 2 });
    await insertUser({ name: "u1", author_id: 1 });
    // And the user can only see one book
    const rule: AuthRule<User> = { authorManyToOne: { books: {} } };
    const em = newEntityManager({
      findPlugin: new RebacAuthPlugin(um, "u:1", rule),
    });
    // Then we only got one back
    const books = await em.find(Book, {});
    expect(books.length).toBe(1);
    // And we added a new join
    expect(finds[0].tables).toEqual([
      { alias: "b", table: "books", join: "primary" },
      { alias: "a", table: "authors", join: "inner", col1: "b.author_id", col2: "a.id" },
      { alias: "u", table: "users", join: "inner", col1: "a.id", col2: "u.author_id" },
    ]);
  });

  it("can filter em.find with existing o2m join", async () => {
    // Given two authors with their own books
    await insertAuthor({ first_name: "a1" });
    await insertAuthor({ first_name: "a2" });
    await insertBook({ title: "b1", author_id: 1 });
    await insertBook({ title: "b2", author_id: 2 });
    await insertUser({ name: "u1", author_id: 1 });
    // And the user can only see their one book
    const rule: AuthRule<User> = { authorManyToOne: { books: {} } };
    const em = newEntityManager({
      findPlugin: new RebacAuthPlugin(um, "u:1", rule),
    });
    // When we query for books of author a:1
    const books = await em.find(Book, { author: "a:1" });
    // Then we only got one back
    expect(books.length).toBe(1);
    // And we reused the existing authors join
    expect(finds[0].tables).toEqual([
      { alias: "b", table: "books", join: "primary" },
      { alias: "a", table: "authors", join: "inner", col1: "b.author_id", col2: "a.id" },
      { alias: "u", table: "users", join: "inner", col1: "a.id", col2: "u.author_id" },
    ]);
  });

  it("can filter em.find with existing o2m join and existing and condition", async () => {
    // Given two authors with their own books
    await insertAuthor({ first_name: "a1" });
    await insertAuthor({ first_name: "a2" });
    await insertBook({ title: "a1", author_id: 1 });
    await insertBook({ title: "a2", author_id: 1 });
    await insertBook({ title: "b1", author_id: 2 });
    await insertUser({ name: "u1", author_id: 1 });
    // And the user can only see their one book
    const rule: AuthRule<User> = { authorManyToOne: { books: {} } };
    const em = newEntityManager({
      findPlugin: new RebacAuthPlugin(um, "u:1", rule),
    });
    // When we query for books with `1` in the title
    const books = await em.find(Book, { title: { like: "%1%" } });
    expect(books.length).toBe(1);
  });

  it("can filter em.find with existing o2m join and existing or condition", async () => {
    // Given two authors with their own books
    await insertAuthor({ first_name: "a1" });
    await insertAuthor({ first_name: "a2" });
    await insertBook({ title: "a1", author_id: 1 });
    await insertBook({ title: "a2", author_id: 1 });
    await insertBook({ title: "b1", author_id: 2 });
    await insertUser({ name: "u1", author_id: 1 });
    // And the user can only see their one book
    const rule: AuthRule<User> = { authorManyToOne: { books: {} } };
    const em = newEntityManager({
      findPlugin: new RebacAuthPlugin(um, "u:1", rule),
    });
    // When we query for books with `1` in the title
    const b = alias(Book);
    const books = await em.find(
      Book,
      { as: b },
      {
        conditions: { or: [b.title.eq("a1"), b.title.eq("b1")] },
        softDeletes: "include",
      },
    );
    // Then we only got one back
    expect(books.length).toBe(1);
    expect(finds[0].condition).toEqual({
      op: "and",
      conditions: [
        {
          op: "or",
          conditions: [
            { alias: "b", column: "title", dbType: "character varying", cond: { kind: "eq", value: "a1" } },
            { alias: "b", column: "title", dbType: "character varying", cond: { kind: "eq", value: "b1" } },
          ],
        },
        { alias: "u", column: "id", dbType: "int", cond: { kind: "eq", value: "1" } },
      ],
    });
  });

  it("can parse star field rules", () => {
    // Given a rule that uses `*` to mean "all fields"
    const rule: AuthRule<User> = {
      "*": rw,
      authorManyToOne: { books: { "*": r } },
    };
    // Then we can parse it
    const parsed = parseAuthRule(um, rule);
    expect(parsed).toMatchObject({
      User: [{ fields: { "*": "rw" }, pathToUser: [] }],
      Author: [{ fields: {}, pathToUser: ["userOneToOne"] }],
      Book: [{ fields: { "*": "r" }, pathToUser: ["author", "userOneToOne"] }],
    });
  });

  it("can parse method invocation rules", () => {
    // Given a rule that can invoke the `publish` method
    const rule: AuthRule<User> = {
      authorManyToOne: { books: { publish: i } },
    };
    // Then we can parse it
    const parsed = parseAuthRule(um, rule);
    expect(parsed).toMatchObject({
      Book: [{ methods: { publish: "i" } }],
    });
  });

  it("can parse where scopes", () => {
    // Given a rule that can invoke the `publish` method
    const rule: AuthRule<User> = {
      authorManyToOne: { books: { where: { title: "b1" } } },
    };
    // Then we can parse it
    const parsed = parseAuthRule(um, rule);
    expect(parsed).toMatchObject({
      Book: [{ where: { title: "b1" } }],
    });
  });
});

type ToWords<S extends string> = S extends `${infer H} ${infer T}` ? H | `${ToWords<T>}` : S;

function w<S extends string>(_: S): ToWords<S>[] {
  return _.split(" ") as ToWords<S>[];
}

// gets typed as `("foo" | "bar" | "zaz")[]`
const words = w(`foo bar zaz`);

// maybe use it for auth rules like:
// { read: "fullName email", write: "firstName lastName" }

// Should 'Permissions' be an explicit entity? Why/why not?
// The two obvious permissions are "read" and "write" ... CRUD.
// Everything else is "can I invoke operation x?"
// Maybe that's what we do, is build in PotentialOperation as Operation,
// which can be `book.publish.isAllowed()` or `book.publish.call()`d, i.e.
// very similar to AsyncMethods but when the ability to say "the user is
// or is not allowed to do this".
// And then because `book.publish` shows up in the AuthRule graph, it can
// the auth-side side of allowed could be handled by the rebac plugin?