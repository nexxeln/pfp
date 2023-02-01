export interface Iteration<T, K> {
  (x: Iterable<T>): Iterable<K>;
}
