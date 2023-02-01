import { Iteration } from "./types/index.ts";

interface Pipe {
  <T extends Iterable<unknown>>(x: T): T extends Iterable<infer U>
    ? Iterable<U>
    : never;

  <T extends Iterable<unknown>, A>(
    x: T,
    f1: Iteration<T extends Iterable<infer U> ? U : never, A>
  ): Iterable<A>;

  <T extends Iterable<unknown>, A, B>(
    x: T,
    f1: Iteration<T extends Iterable<infer U> ? U : never, A>,
    f2: Iteration<A, B>
  ): Iterable<B>;

  <T extends Iterable<unknown>, A, B, C>(
    x: T,
    f1: Iteration<T extends Iterable<infer U> ? U : never, A>,
    f2: Iteration<A, B>,
    f3: Iteration<B, C>
  ): Iterable<C>;

  <T extends Iterable<unknown>, A, B, C, D>(
    x: T,
    f1: Iteration<T extends Iterable<infer U> ? U : never, A>,
    f2: Iteration<A, B>,
    f3: Iteration<B, C>,
    f4: Iteration<C, D>
  ): Iterable<D>;

  <T extends Iterable<unknown>, A, B, C, D, E>(
    x: T,
    f1: Iteration<T extends Iterable<infer U> ? U : never, A>,
    f2: Iteration<A, B>,
    f3: Iteration<B, C>,
    f4: Iteration<C, D>,
    f5: Iteration<D, E>
  ): Iterable<E>;

  <T extends Iterable<unknown>, A, B, C, D, E, F>(
    x: T,
    f1: Iteration<T extends Iterable<infer U> ? U : never, A>,
    f2: Iteration<A, B>,
    f3: Iteration<B, C>,
    f4: Iteration<C, D>,
    f5: Iteration<D, E>,
    f6: Iteration<E, F>
  ): Iterable<F>;

  <T extends Iterable<unknown>, A, B, C, D, E, F, G>(
    x: T,
    f1: Iteration<T extends Iterable<infer U> ? U : never, A>,
    f2: Iteration<A, B>,
    f3: Iteration<B, C>,
    f4: Iteration<C, D>,
    f5: Iteration<D, E>,
    f6: Iteration<E, F>,
    f7: Iteration<F, G>
  ): Iterable<G>;

  <T extends Iterable<unknown>, A, B, C, D, E, F, G, H>(
    x: T,
    f1: Iteration<T extends Iterable<infer U> ? U : never, A>,
    f2: Iteration<A, B>,
    f3: Iteration<B, C>,
    f4: Iteration<C, D>,
    f5: Iteration<D, E>,
    f6: Iteration<E, F>,
    f7: Iteration<F, G>,
    f8: Iteration<G, H>
  ): Iterable<H>;

  <T extends Iterable<unknown>, A, B, C, D, E, F, G, H, I>(
    x: T,
    f1: Iteration<T extends Iterable<infer U> ? U : never, A>,
    f2: Iteration<A, B>,
    f3: Iteration<B, C>,
    f4: Iteration<C, D>,
    f5: Iteration<D, E>,
    f6: Iteration<E, F>,
    f7: Iteration<F, G>,
    f8: Iteration<G, H>,
    f9: Iteration<H, I>
  ): Iterable<I>;

  <T extends Iterable<unknown>, A, B, C, D, E, F, G, H, I, J>(
    x: T,
    f1: Iteration<T extends Iterable<infer U> ? U : never, A>,
    f2: Iteration<A, B>,
    f3: Iteration<B, C>,
    f4: Iteration<C, D>,
    f5: Iteration<D, E>,
    f6: Iteration<E, F>,
    f7: Iteration<F, G>,
    f8: Iteration<G, H>,
    f9: Iteration<H, I>,
    f10: Iteration<I, J>
  ): Iterable<J>;

  (
    x: Iterable<unknown>,
    ...fns: Iteration<unknown, unknown>[]
  ): Iterable<unknown>;
}

export const pipe: Pipe = (
  x: Iterable<unknown>,
  ...fns: readonly Iteration<unknown, unknown>[]
) => {
  return fns.reduce((x, f) => f(x), x);
};
