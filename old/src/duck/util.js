// import Api from 'lib/Api';
// import Toaster, { Intent } from '../components/Toaster';
// 액션 팩토리 팩토리
export const prepareActions = category => {
  // 액션 팩토리
  const actionCreator = (name, initialValue = {}) => {
    const type = `${category}/${name}`;
    const create = (payload, meta) => ({ type, payload, meta });
    // 간편 리듀서
    const simpleReducer = (state = initialValue, action) => {
      if (action.type !== type) return state;
      if (action.payload && action.payload.error) {
        // Toaster.show({
        //   iconName: 'error',
        //   message: action.payload.error,
        //   intent: Intent.WARNING
        // });
      }
      return action.payload;
    };
    create.type = type;
    create.simpleReducer = simpleReducer;
    return create;
  };
  return actionCreator;
};
