import { userLogin } from "./loginSlice1";

export const PURCHASE = "PURCHASE";
export const LOGIN = "LOGIN";
export const DELETE = "DELETE";
export const validateUser = (loginDet) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(userLogin(loginDet));
    }, 2000);
  };
};
