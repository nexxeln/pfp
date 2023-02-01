export class List<T> {
  private _array: T[];

  constructor(array: T[]) {
    this._array = array;
  }

  at = (index: number): T => this._array[index];

  concat = (list: List<T>): List<T> =>
    new List([...this._array, ...list._array]);

  map = <U>(callback: (item: T, index: number) => U): List<U> => {
    return new List(
      Array.from({ length: this._array.length }, (_, index) =>
        callback(this._array[index], index)
      )
    );
  };
}

export const list = <T>(array: T[]): List<T> => new List(array);
