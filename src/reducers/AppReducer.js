import { ACTION_TYPES } from "./ActionType";

const initialState = {
  restaurantDetails: null,
  userDetails: {},
  userLocation: null,
  cartItems: null
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_RESTAURANT_DETAILS:
      // // console.log("SET_RESTAURANT_DETAILS");
      return {
        ...state,
        restaurantDetails: action.payload
      };

    case ACTION_TYPES.SET_USER_LOCATION:
      // // console.log("SET_USER_LOCATION");
      return {
        ...state,
        userLocation: action.payload
      };

    case ACTION_TYPES.SET_CART_ITEMS:
      // // console.log("SET_USER_LOCATION");
      return {
        ...state,
        cartItems: action.payload
      };


    default:
      // console.log("Default");
      return state;
  }
};
export default AppReducer;
