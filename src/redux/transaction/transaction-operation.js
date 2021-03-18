import axios from "axios";
import transactionsActions from "./transaction-actions";

axios.defaults.baseURL = "https://kapusta-srv.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8080";

const setBalance = (balance) => async (dispatch) => {
  dispatch(transactionsActions.setBalanceRequest());
  try {
    const response = await axios.patch("/user/balance", { balance });
    console.log(response);
    dispatch(transactionsActions.setBalanceSucces(response.data.balance));
  } catch (error) {
    dispatch(transactionsActions.setBalanceError(error.message));
  }
};

export default {
  setBalance,
};
