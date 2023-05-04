import { stringify } from "querystring";

export const paginationNext = (range: string) => {
  let split = range.split(":");

  let a = split[0].slice(1);
  let b = split[1].slice(1);

  let parseA = parseInt(a);

  let parseB = parseInt(b);

  parseA += 10;
  parseB += 10;

  a = parseA.toString();
  b = parseB.toString();

  let newRange = `A${a}:G${b}`;

  return newRange;
};

export const paginationPrev = (range: string) => {
  let split = range.split(":");

  let a = split[0].slice(1);
  let b = split[1].slice(1);

  let parseA = parseInt(a);

  let parseB = parseInt(b);

  parseA -= 10;
  parseB -= 10;

  a = parseA.toString();
  b = parseB.toString();

  let newRange = `A${a}:G${b}`;

  return newRange;
};
