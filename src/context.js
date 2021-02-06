import React, { useState, useContext, useReducer, useEffect } from "react";
import { FaLastfmSquare } from "react-icons/fa";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  total: 0,
  totalAmount: 0,
  cart: cartItems,
};

const AppProvider = ({ children }) => {
  //const [cart, setCart] = useState(cartItems)

  //paras: reducer function & initial state
  console.log(initialState.totalAmount);
  const [state, dispatch] = useReducer(reducer, initialState); //if you need to do anything with reducer, it must go through dispatch to reducer

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, []);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        increase,
        decrease,
        remove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
