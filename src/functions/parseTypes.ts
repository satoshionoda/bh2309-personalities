import { Dimension } from "../const.ts";

export const parseTypes = (dimensions: Dimension[]): string[] => {
  const d1 = dimensions[0]?.split("") || [];
  const d2 = dimensions[1]?.split("") || [];
  const d3 = dimensions[2]?.split("") || [];
  const d4 = dimensions[3]?.split("") || [];
  switch (true) {
    case !!d4.length:
      return d2
        .map((s2) => d4.map((s4) => d1.map((s1) => d3.map((s3) => `${s1}${s2}${s3}${s4}`))))
        .flat(3);
    case !!d3.length:
      return d2.map((s2) => d1.map((s1) => d3.map((s3) => `${s1}${s2}${s3}`))).flat(2);
    case !!d2.length:
      return d2.map((s2) => d1.map((s1) => `${s1}${s2}`)).flat();
    case !!d1.length:
      return d1;
    default:
      return [];
  }
};
