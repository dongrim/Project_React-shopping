const isPromise = (payload) =>
  (typeof payload === "object" || typeof payload === "function") &&
  typeof payload.then === "function";

// export const asyncActions = () => (next) => (action) => {
//   if (isPromise(action.payload)) {
//     action.payload.then((result) => next({ ...action, payload: result }));
//   } else {
//     next(action);
//   }
// };
export function asyncActions() {
  // f => dispatch(action) {}
  return function (next) {
    // obj => {type: 'data_load', payload: {...}}
    return function (action) {
      if (isPromise(action.payload)) {
        action.payload.then((result) => next({ ...action, payload: result }));
      } else {
        next(action);
      }
    };
  };
}
