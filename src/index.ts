// deno-lint-ignore-file no-unused-vars
// this is a playground file for testing out the library for now
import { List, list } from "./list.ts";

const listt = [1];
const l = list(listt);

console.log(l.intersperse(0).toArray());
