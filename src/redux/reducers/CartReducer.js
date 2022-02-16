import { ActionTypes } from "../constants/Types";

export const CartReducer = (storeData, action) => {
  console.group("%c @CartReducer ", "background: #222; color: #bada55");
  console.log("storeData => ", storeData);
  console.log("action => ", action);
  console.groupEnd();
  const { type, payload } = action;
  // 'payload' && addded due to applyMiddleware
  const prod = payload && payload.product;
  const qty = payload && Number(payload.quantity);
  let newStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeData };
  let existing = newStore.cart.find((item) => item.product.id === prod.id);

  const getCartPrice = () => {
    const totalPrice = newStore.cart.map((item) => {
      return item.product.price * item.quantity;
    });
    return totalPrice.reduce((acc, curr) => acc + curr); // error due to no initial value
  };
  const getCartQuantity = () => {
    const totalQty = newStore.cart.map((item) => {
      return item.quantity;
    });
    return totalQty.reduce((acc, curr) => acc + curr);
  };

  switch (type) {
    // #.1 Add
    case ActionTypes.CART_ADD:
      if (existing) {
        existing.quantity += qty;
      } else {
        newStore.cart = [...newStore.cart, payload];
      }
      newStore.cartItems = newStore.cart.length;
      newStore.cartPrice = getCartPrice();
      return newStore;

    // #.2 Update
    case ActionTypes.CART_UPDATE:
      existing.quantity = qty;
      newStore.cartPrice = getCartPrice();
      return newStore;

    // #.3 Remove
    case ActionTypes.CART_REMOVE:
      newStore.cart = newStore.cart.filter(
        (item) => item.product.id !== prod.id
      );
      newStore.cartPrice = getCartPrice();
      newStore.cartItems = getCartQuantity();
      return newStore;

    // #.4 Clear
    case ActionTypes.CART_CLEAR:
      return { ...storeData, cart: [], cartItems: 0, cartPrice: 0 };
    default:
      return storeData || {};
  }
};
