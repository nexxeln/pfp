// deno-lint-ignore-file no-unused-vars
// this is a playground file for testing out the library for now
import { List, list } from "./list.ts";

const listt = [1, 2, 3, 2, 1];
const l = list(listt);

const hi = l.dropWhile((x) => x > -1).toArray();

const lol = list([]).empty();

console.log(hi);
console.log(lol);
