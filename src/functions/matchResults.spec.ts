import { matchResults } from "./matchResults.ts";

describe("matchResults", () => {
  it("should work", () => {
    const result = matchResults("IN");
    expect(result.map((r) => r.key).sort()).toEqual(["INFJ", "INFP", "INTJ", "INTP"].sort());
  });
});
