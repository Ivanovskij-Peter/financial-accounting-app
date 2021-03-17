import axios from "axios";
import transactionsActions from "./transaction-actions";

axios.defaults.baseURL = "https://kapusta-srv.herokuapp.com";

const setBalance = (balance) => async (dispatch) => {
  dispatch(transactionsActions.setBalanceRequest());
  try {
    const response = await axios.patch("/user/balance", balance);
    console.log(response);
    dispatch(transactionsActions.setBalanceSucces(response.data));
  } catch (error) {
    dispatch(transactionsActions.setBalanceError(error.message));
  }
};

export default {
  setBalance,
};
