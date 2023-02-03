export class List<T> {
  private _array: T[];

  constructor(array: T[]) {
    this._array = array;
  }

  all = (callback?: (item: T) => unknown): boolean =>
    callback
      ? this._array.every((item) => Boolean(callback(item)))
      : this._array.every((item) => Boolean(item));

  any = (callback?: (item: T) => unknown): boolean =>
    callback
      ? this._array.some((item) => Boolean(callback(item)))
      : this._array.some((item) => Boolean(item));

  at = (index: number): T => this._array[index];

  count = (callback?: (item: T) => unknown): number =>
    callback
      ? this._array.filter((item) => Boolean(callback(item))).length
      : this._array.length;

  concat = (list: List<T>): List<T> =>
    new List(this._array.concat(list._array));

  dedup = (): List<T> =>
    new List(
      this._array.reduce((acc, item) => {
        if (acc.length === 0 || acc[acc.length - 1] !== item) {
          acc.push(item);
        }

        return acc;
      }, [] as T[])
    );

  every = (callback: (item: T, index: number) => boolean): boolean =>
    this._array.every(callback);

  filter = (callback: (item: T, index: number) => boolean): List<T> =>
    new List(this._array.filter(callback));

  find = (callback: (item: T, index: number) => boolean): T | undefined =>
    this._array.find(callback);

  findIndex = (callback: (item: T, index: number) => boolean): number =>
    this._array.findIndex(callback);

  findLast = (callback: (item: T, index: number) => boolean): T | undefined =>
    this._array.findLast(callback);

  findLastIndex = (callback: (item: T, index: number) => boolean): number =>
    this._array.findLastIndex(callback);

  forEach = (callback: (item: T, index: number) => void): void =>
    this._array.forEach(callback);

  includes = (item: T): boolean => this._array.includes(item);

  indexOf = (item: T): number => this._array.indexOf(item);

  join = (separator?: string): string => this._array.join(separator);

  lastIndexOf = (item: T): number => this._array.lastIndexOf(item);

  length = (): number => this._array.length;

  map = <U>(callback: (item: T, index: number) => U): List<U> =>
    new List(this._array.map(callback));

  max = (): T | undefined => this._array.reduce((a, b) => (a > b ? a : b));

  min = (): T | undefined => this._array.reduce((a, b) => (a < b ? a : b));

  pop = (): T | undefined => this._array.pop();

  push = (...items: T[]): number => this._array.push(...items);

  reduce = <U>(
    callback: (accumulator: U, item: T, index: number) => U,
    initialValue: U
  ): U => this._array.reduce(callback, initialValue);

  reduceRight = <U>(
    callback: (accumulator: U, item: T, index: number) => U,
    initialValue: U
  ): U => this._array.reduceRight(callback, initialValue);

  // implement the reject function from elixir
  reject = (callback: (item: T, index: number) => boolean): List<T> =>
    new List(this._array.filter((item, index) => !callback(item, index)));

  reverse = (): List<T> => new List(this._array.reverse());

  shift = (): T | undefined => this._array.shift();

  slice = (start?: number, end?: number): List<T> =>
    new List(this._array.slice(start, end));

  some = (callback: (item: T, index: number) => boolean): boolean =>
    this._array.some(callback);

  sort = (compareFn?: (a: T, b: T) => number): List<T> =>
    new List(this._array.sort(compareFn));

  splice = (start: number, deleteCount?: number): List<T> =>
    new List(this._array.splice(start, deleteCount));

  toArray = (): T[] => this._array;

  toLocaleString = (): string => this._array.toLocaleString();

  toString = (): string => this._array.toString();

  uniq = (): List<T> => new List([...new Set(this._array)]);

  uniqBy = <U>(callback: (item: T) => U): List<T> =>
    new List([
      ...this._array
        .reduce((map, item) => {
          const key = callback(item);

          if (!map.has(key)) map.set(key, item);

          return map;
        }, new Map<U, T>())
        .values(),
    ]);

  unshift = (...items: T[]): number => this._array.unshift(...items);
}

export const list = <T>(array: T[]): List<T> => new List(array);
