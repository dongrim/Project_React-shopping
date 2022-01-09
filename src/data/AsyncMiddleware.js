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

/*
function dispatch(action) {
  if (!isPlainObject(action)) {
    throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
  }
  if (typeof action.type === 'undefined') {
    throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
  }
  if (isDispatching) {
    throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
  }
  try {
    isDispatching = true;
    currentState = currentReducer(currentState, action);
  } finally {
    isDispatching = false;
  }
  var listeners = currentListeners = nextListeners;
  for (var i = 0; i < listeners.length; i++) {
    var listener = listeners[i];
    listener();
  }
  return action;
}
*/
