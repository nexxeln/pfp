const all = <T>(enumerable: T[], fun?: (element: T) => unknown): boolean =>
  fun
    ? enumerable.every((element) => fun(element))
    : enumerable.every((element) => Boolean(element));

export const Enum = {
  all,
};
