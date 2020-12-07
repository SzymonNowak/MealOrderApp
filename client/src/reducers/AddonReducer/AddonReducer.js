import { actionTypes } from "../../constants/actionTypes";
import { db } from "../../initialStates/productState";

const AddonReducer = (state = db, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_ADDONS:
      return action.payload;

    default:
      return state;
  }
};

export default AddonReducer;