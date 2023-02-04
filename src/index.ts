// deno-lint-ignore-file no-unused-vars
// this is a playground file for testing out the library for now
import { List, list } from "./list.ts";

const listt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const l = list(listt).takeEvery(1).toArray();

console.log(l);
