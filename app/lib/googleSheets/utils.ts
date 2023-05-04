import { stringify } from "querystring";

export const paginationNext = (range: string) => {
  let split = range.split(":");

  let a = split[0];
  let b = split[1];

  let parseA = parseInt(a);

  if (parseA < 2 || parseA > 4900) {
    return range;
  }

  let parseB = parseInt(b);

  if (parseB < 101 || parseB > 5001) {
    return range;
  }

  parseA += 100;
  parseB += 100;

  a = parseA.toString();
  b = parseB.toString();

  let newRange = `A${a}:G${b}`;

  return newRange;
};

export const paginationPrev = (range: string) => {
  let split = range.split(":");

  let a = split[0];
  let b = split[1];

  let parseA = parseInt(a);

  if (parseA < 2 || parseA > 4900) {
    return range;
  }

  let parseB = parseInt(b);

  if (parseB < 101 || parseB > 5001) {
    return range;
  }

  parseA -= 100;
  parseB -= 100;

  a = parseA.toString();
  b = parseB.toString();

  let newRange = `A${a}:G${b}`;

  return newRange;
};
