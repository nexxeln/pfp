// deno-lint-ignore-file no-unused-vars
// this is a playground file for testing out the library for now
import { List, list } from "./list.ts";

const listt = [5, 1, 2, 3, 2, 1];
const l = list(listt);

const hi = l.uniqBy((x) => x > 2).toArray();

console.log(hi);
