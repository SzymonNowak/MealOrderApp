import { actionTypes } from "../../constants/actionTypes";
import { db } from "../../initialStates/productState";

const SauceReducer = (state = db, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_SAUCES:
      return action.payload;
    default:
      return state;
  }
};

export default SauceReducer;