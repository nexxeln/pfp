const all = <T>(enumerable: T[], fun?: (element: T) => unknown): boolean =>
  fun
    ? enumerable.every((element) => Boolean(fun(element)))
    : enumerable.every((element) => Boolean(element));

const any = <T>(enumerable: T[], fun?: (element: T) => unknown): boolean =>
  fun
    ? enumerable.some((element) => Boolean(fun(element)))
    : enumerable.some((element) => Boolean(element));

const min = (enumerable: number[]): number => Math.min(...enumerable);

const max = (enumerable: number[]): number => Math.max(...enumerable);

export const Enum = {
  all,
  any,
  min,
  max,
};
