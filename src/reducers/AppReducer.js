import { ACTION_TYPES } from "./ActionType";

const initialState = {
  restaurantDetails: null,
  userDetails: {}
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_RESTAURANT_DETAILS:
      // // console.log("SET_RESTAURANT_DETAILS");
      return {
        ...state,
        restaurantDetails: action.payload
      };

    default:
      // console.log("Default");
      return state;
  }
};
export default AppReducer;
