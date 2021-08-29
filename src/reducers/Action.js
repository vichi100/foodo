import { ACTION_TYPES } from "./ActionType";

export const setRestaurantDetails = payload => {
  // console.log("payload", payload);
  return {
    type: ACTION_TYPES.SET_RESTAURANT_DETAILS,
    payload
  };
};

export const setUserLocation = payload => {
  // console.log("payload", payload);
  return {
    type: ACTION_TYPES.SET_USER_LOCATION,
    payload
  };
};

export const setCartItems = payload => {
  // console.log("payload", payload);
  return {
    type: ACTION_TYPES.SET_CART_ITEMS,
    payload
  };
};



