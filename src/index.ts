// deno-lint-ignore-file no-unused-vars
// this is a playground file for testing out the library for now
import { List, list } from "./list.ts";

const listt = [1, 2, 2, 3, 4, 4, 6, 7, 7];
const l = list(listt)
  .chunkBy((item) => item % 2 === 1)
  .toArray()
  .map((item) => item.toArray());

console.log(l);
