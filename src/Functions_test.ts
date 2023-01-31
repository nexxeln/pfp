import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";
import { pipe } from "./Functions.ts";

Deno.test("pipes multiple functions", () => {
  const add1 = (x: number) => x + 1;
  const add2 = (x: number) => x + 2;
  const result = pipe(1, add1, add2);

  assertEquals(result, 4);
});
