const all = <T>(enumerable: T[], fun?: (element: T) => unknown): boolean =>
  fun
    ? enumerable.every((element) => Boolean(fun(element)))
    : enumerable.every((element) => Boolean(element));

const any = <T>(enumerable: T[], fun?: (element: T) => unknown): boolean =>
  fun
    ? enumerable.some((element) => Boolean(fun(element)))
    : enumerable.some((element) => Boolean(element));

function map<T, U>(
  enumerable: T[],
  fun: (element: T, index: number, enumerable: T[]) => U
): U[] {
  return Array.from({ length: enumerable.length }, (_, index) =>
    fun(enumerable[index], index, enumerable)
  );
}

const max = (enumerable: number[]): number => Math.max(...enumerable);

const min = (enumerable: number[]): number => Math.min(...enumerable);

const uniq = <T>(enumerable: T[]): T[] => [...new Set(enumerable)];

const uniqBy = <T, K>(enumerable: T[], fun: (element: T) => K): T[] => [
  ...enumerable
    .reduce((map, element) => {
      const key = fun(element);
      if (!map.has(key)) map.set(key, element);
      return map;
    }, new Map<K, T>())
    .values(),
];

export const Enum = {
  all,
  any,
  map,
  max,
  min,
  uniq,
  uniqBy,
};
