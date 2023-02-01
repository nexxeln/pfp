export class List<T> {
  private _array: T[];

  constructor(array: T[]) {
    this._array = array;
  }

  at = (index: number): T => this._array[index];

  map = <U>(callback: (item: T, index: number) => U): List<U> => {
    return new List(
      Array.from({ length: this._array.length }, (_, index) =>
        callback(this._array[index], index)
      )
    );
  };
}
