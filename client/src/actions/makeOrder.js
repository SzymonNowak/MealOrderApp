import * as api from "../api/index";
import { actionTypes } from "../constants/actionTypes";
// export const makeOrder = (ourOrder) => async (dispatch) => {
//   try {
//     const { data } = await api.makeOrder(ourOrder);
//     dispatch({
//       type: actionTypes.MAKE_ORDER,
//       payload: data,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
export const saveOrderToRedux = (order) => async (dispatch) => {
  try {
    await dispatch({
      type: actionTypes.SAVE_ORDER_TO_REDUX,
      payload: order,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const makeOrder = (order, socket) => async (dispatch) => {
  try {
    const data = await socket.emit("test", {
      order,
    });
    dispatch({
      type: actionTypes.MAKE_ORDER,
      payload: data.id,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllNotFinishedOrders = () => async (dispatch) => {
  try {
    const { data } = await api.getAllNotFinishedOrders();
    console.log(data);
    dispatch({
      type: actionTypes.GET_ALL_NOT_FINISHED_ORDERS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
