import { ACTION_TYPES } from "./ActionType";

export const setRestaurantDetails = payload => {
  console.log("payload", payload);
  return {
    type: ACTION_TYPES.SET_RESTAURANT_DETAILS,
    payload
  };
};
