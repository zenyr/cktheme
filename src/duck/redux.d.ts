declare type Action<T, P = undefined> = { type: T; payload: P };
// declare type ActionCreator<A extends Action<any, any>> = (
//   param: A['payload']
// ) => A;
declare type Reducer<S extends {}, A> = (state: S, action: A) => S;
declare interface Reducer2<S extends {}, A> {
  (state: S, action: A): S;
}
