// this is a playground file for testing out the library for now
import { List } from "./list.ts";

const list = new List([1, 2, 3, 4, 5]);

const hi = list
  .map((item) => item * 2)
  .map((item) => item + 1)
  .at(2);

console.log(hi);
