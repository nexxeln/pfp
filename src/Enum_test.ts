import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";
import { Enum } from "./Enum.ts";

// these are one of my first unit tests ever so they're prety bad. don't judge, i'm still learning
// if you have any suggestions on how to improve them, please let me know or open a pull request!

Deno.test("Enum.all()", () => {
  assertEquals(
    Enum.all([1, 2, 3]),
    true,
    "returns true if all elements in enumerable are truthy"
  );
  assertEquals(
    Enum.all(["a", "b", "c"]),
    true,
    "returns true if all elements in enumerable are truthy"
  );

  assertEquals(
    Enum.all([1, 2, 0]),
    false,
    "returns false if any element in enumerable is falsy"
  );
  assertEquals(
    Enum.all(["a", "b", ""]),
    false,
    "returns false if any element in enumerable is falsy"
  );

  assertEquals(
    Enum.all([1, 2, 3], (x) => x > 0),
    true,
    "returns true if fun(element) is truthy for all elements in enumerable"
  );
  assertEquals(
    Enum.all(["a", "b", "c"], (x) => x.length > 0),
    true,
    "returns true if fun(element) is truthy for all elements in enumerable"
  );

  assertEquals(
    Enum.all([1, 2, 3], (x) => x < 1),
    false,
    "returns false if fun(element) is falsy for any element in enumerable"
  );
  assertEquals(
    Enum.all(["a", "b", "c"], (x) => x.replace("a", "")),
    false,
    "returns false if fun(element) is falsy for any element in enumerable"
  );
});
