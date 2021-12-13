import { ActionTypes } from "./Types";

export const CartReducer = (storeData, action) => {
  // console.log("@CartReducer(storeData): ", storeData);
  // console.log("@CartReducer(action): ", action);
  const { type, payload } = action;
  const prod = payload.product;
  const qty = payload.quantity;
  let newStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeData };

  switch (type) {
    case ActionTypes.CART_ADD:
      // console.log("@type: ", type);
      // console.log("@product: ", prod);
      // console.log("@quantity: ", qty);
      let existing = newStore.cart.find((item) => item.product.id === prod.id);
      if (existing) {
        existing.quantity += qty;
      } else {
        // newStore.cart = [...newStore.cart, action.payload];
        newStore.cart = [...newStore.cart, payload];
      }
      newStore.cartItems = newStore.cart.length;
      newStore.cartPrice += prod.price * qty;
      return newStore;

    // #.2 Update
    case ActionTypes.CART_UPDATE:
      let existing1 = newStore.cart.find((item) => item.product.id === prod.id);
      existing1.quantity = qty;
      newStore.cartPrice = prod.price * qty;
      return newStore;

    // #.3 Delete
    case ActionTypes.CART_REMOVE:
      newStore.cart = [
        newStore.cart.find((item) => item.product.id !== prod.id),
      ];
      return newStore;

    // #.4 Clear
    case ActionTypes.CART_CLEAR:
      return { ...storeData, cart: [], cartItems: 0, cartPrice: 0 };
    default:
      return storeData || {};
  }
};
