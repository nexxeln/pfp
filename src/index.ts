// deno-lint-ignore-file no-unused-vars
// this is a playground file for testing out the library for now
import { List, list } from "./list.ts";

const listt = [1, 2, 3];
const l = list(listt);

const hi = l.drop(4).toArray();

console.log(hi);
