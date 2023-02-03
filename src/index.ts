// deno-lint-ignore-file no-unused-vars
// this is a playground file for testing out the library for now
import { List, list } from "./list.ts";

const l = list([1, 2, 3, 4, 5]);

const hi = l
  .map((item) => item * 2)
  .concat(l)
  .length();

console.log(hi);

const hii = [1, 2, 3, 4, 5].every((item) => item > 0);

console.log(hii);

const hiii = [1, 2, 3, 4, 5].keys().next().value;
console.log(hiii);
