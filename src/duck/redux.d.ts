declare type Action<T, P = undefined> = { type: T; payload: P };
declare type ActionCreator<Param, T, P> = (param: Param) => Action<T, P>;
declare type Reducer<S, A> = (state: S, action: A) => S;
