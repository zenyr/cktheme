export const actionize = <A extends Action<{}, {}>>(type: A['type']) => (
    payload: A['payload']
  ) => ({ type, payload });