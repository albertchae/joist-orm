import { Author } from "@src/entities";
import { getMetadata, tagId, tagIds } from "joist-orm";

describe("taggedIds", () => {
  it("can tag id", async () => {
    expect(tagId(Author, 1)).toEqual("a:1");
    expect(tagId(Author, "1")).toEqual("a:1");
    expect(tagId(Author, null)).toBeUndefined();
    expect(tagId(Author, undefined)).toBeUndefined();
    expect(tagId(getMetadata(Author), 1)).toEqual("a:1");
    expect(tagId(getMetadata(Author), "1")).toEqual("a:1");
  });

  it("can tag ids", async () => {
    expect(tagIds(Author, [1, 2])).toEqual(["a:1", "a:2"]);
    expect(tagIds(Author, ["1", "2"])).toEqual(["a:1", "a:2"]);
    expect(tagIds(getMetadata(Author), [1, 2])).toEqual(["a:1", "a:2"]);
    expect(tagIds(getMetadata(Author), ["1", "2"])).toEqual(["a:1", "a:2"]);
  });
});