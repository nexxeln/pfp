// deno-lint-ignore-file no-unused-vars
// this is a playground file for testing out the library for now
import { List, list } from "./list.ts";

const l = list([1, 2, 3, 4, 5]);

const hi = l
  .map((item) => item * 2)
  .map((item) => item + 1)
  .at(2);

console.log(hi);
