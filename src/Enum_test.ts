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

Deno.test("Enum.any()", () => {
  assertEquals(
    Enum.any([0, 2, 3]),
    true,
    "returns true if at least one element in enumerable is truthy"
  );
  assertEquals(
    Enum.any(["", "b", ""]),
    true,
    "returns true if at least one element in enumerable is truthy"
  );

  assertEquals(
    Enum.any([0, 0, 0]),
    false,
    "returns false if all elements in enumerable are falsy"
  );
  assertEquals(
    Enum.any(["", "", ""]),
    false,
    "returns false if all elements in enumerable are falsy"
  );

  assertEquals(
    Enum.any([-2, -2, -3], (x) => x + 2),
    true,
    "returns true if fun(element) is truthy for at least one element in enumerable"
  );
  assertEquals(
    Enum.any(["a", "b", "c"], (x) => x.replace("a", "")),
    true,
    "returns true if fun(element) is truthy for at least one element in enumerable"
  );

  assertEquals(
    Enum.any([1, 2, 3], (x) => x < 1),
    false,
    "returns false if fun(element) is falsy for all elements in enumerable"
  );
  assertEquals(
    Enum.any(["a", "b", "c"], (x) => x.length > 1),
    false,
    "returns false if fun(element) is falsy for all elements in enumerable"
  );
});

Deno.test("Enum.min()", () => {
  assertEquals(
    Enum.min([-9, -2, 9, 4, 2, 7, -7, 1, 8, 10]),
    -9,
    "returns the smallest number in enumerable"
  );
});

Deno.test("Enum.max()", () => {
  assertEquals(
    Enum.max([-9, -2, 9, 4, 2, 7, -7, 1, 8, 10]),
    10,
    "returns the largest number in enumerable"
  );
});

Deno.test("Enum.uniq()", () => {
  assertEquals(
    Enum.uniq([1, 2, 3, 1, 2, 3]),
    [1, 2, 3],
    "removes all duplicated elements"
  );
});

Deno.test("Enum.uniqBy", () => {
  assertEquals(
    Enum.uniqBy([1, 2, 3, 1, 2, 3], (x) => x + 1),
    [1, 2, 3],
    "removes the elements for which fun(element) returned duplicate elements"
  );
});

Deno.test("Enum.map()", () => {
  assertEquals(
    Enum.map([1, 2, 3], (x) => x + 1),
    [2, 3, 4],
    "returns a new array with the result of applying fun(element) to each element"
  );

  assertEquals(
    Enum.map(["a", "b", "c"], (x) => x.toUpperCase()),
    ["A", "B", "C"],
    "returns a new array with the result of applying fun(element) to each element"
  );

  assertEquals(
    Enum.map(
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      (x) => x[0]
    ),
    [1, 3, 5],
    "returns a new array by using Enum.map on a nested array"
  );

  assertEquals(
    Enum.map(
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      (x) => Enum.map(x, (y) => y + 1)
    ),
    [
      [2, 3],
      [4, 5],
      [6, 7],
    ],
    "returns a new array by using nested Enum.map"
  );
});

Deno.test("Enum.at()", () => {
  assertEquals(
    Enum.at([1, 2, 3], 1),
    2,
    "returns the element at the given index"
  );

  assertEquals(
    Enum.at([1, 2, 3], 3),
    undefined,
    "returns undefined if the index is out of range"
  );
});
