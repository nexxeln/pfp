const all = <T>(enumerable: T[], fun?: (element: T) => unknown): boolean =>
  fun
    ? enumerable.every((element) => Boolean(fun(element)))
    : enumerable.every((element) => Boolean(element));

const any = <T>(enumerable: T[], fun?: (element: T) => unknown): boolean =>
  fun
    ? enumerable.some((element) => Boolean(fun(element)))
    : enumerable.some((element) => Boolean(element));

export const Enum = {
  all,
  any,
};
