//reducer params: old state and action

const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    console.log("clearing...");
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    let tempCart = state.cart.filter((item) => item.id !== action.payload);

    //tmpAmount = totalAmount - item.amount;
    const tmpAmount =
      state.totalAmount -
      state.cart.find((el) => el.id === action.payload).amount;

    return {
      ...state,
      totalAmount: tmpAmount,
      cart: tempCart,
    };
  }

  if (action.type === "INCREASE") {
    return {
      ...state,
      totalAmount: state.totalAmount + 1,
      cart: state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      }),
    };
  }

  if (action.type === "DECREASE") {
    return {
      ...state,
      totalAmount: state.totalAmount - 1,
      cart: state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.amount > 1) {
            return { ...item, amount: item.amount - 1 };
          } else {
            //remove item
            //let tempCart = state.cart.filter((item) => item.id !== action.payload);

            return {};
          }
        }
        return item;
      }),
    };
  }

  if (action.type === "GET_TOTALS") {
    const totalPrice = state.cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.amount;
    }, 0);

    const totalAmount = state.cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    }, 0);

    return {
      ...state,
      totalAmount: totalAmount,
      total: totalPrice,
    };
  }
};

export default reducer;
