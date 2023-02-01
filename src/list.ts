export function List<T>(list: T[]) {
  const l = list;

  return {
    map: <U>(callback: (item: T, index: number, list: T[]) => U): U[] =>
      Array.from({ length: l.length }, (_, index) =>
        callback(l[index], index, l)
      ),
  };
}
