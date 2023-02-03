// deno-lint-ignore-file no-unused-vars
// this is a playground file for testing out the library for now
import { List, list } from "./list.ts";

const listt = [1, 2, 3, "hi", 4, 5, 5, 6.0, "hi", "hi"];
const l = list(listt);

const hi = l.uniq().toArray();

console.log(hi);
