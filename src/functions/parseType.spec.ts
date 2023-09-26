import { parseTypes } from "./parseTypes";

describe("parseType", () => {
  it("should return empty array when no dimension specified", () => {
    expect(parseTypes([])).toEqual([]);
  });
  it("should split the first dimension", () => {
    expect(parseTypes(["EI"])).toEqual(["E", "I"]);
  });
  it("should split the second dimension", () => {
    expect(parseTypes(["EI", "SN"])).toEqual(["ES", "IS", "EN", "IN"]);
  });
  it("should split the third dimension", () => {
    expect(parseTypes(["EI", "SN", "TF"])).toEqual([
      "EST",
      "ESF",
      "IST",
      "ISF",
      "ENT",
      "ENF",
      "INT",
      "INF",
    ]);
  });
  it("should split the third dimension", () => {
    expect(parseTypes(["EI", "SN", "TF", "JP"])).toEqual([
      "ESTJ",
      "ESFJ",
      "ISTJ",
      "ISFJ",
      "ESTP",
      "ESFP",
      "ISTP",
      "ISFP",
      "ENTJ",
      "ENFJ",
      "INTJ",
      "INFJ",
      "ENTP",
      "ENFP",
      "INTP",
      "INFP",
    ]);
  });
});
