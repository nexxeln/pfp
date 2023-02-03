// deno-lint-ignore-file no-unused-vars
// this is a playground file for testing out the library for now
import { List, list } from "./list.ts";

const listt = [3, 5, 2, 1, 4];
const l = list(listt);

const hi = l.sort((a, b) => a - b).count();

console.log(hi);
