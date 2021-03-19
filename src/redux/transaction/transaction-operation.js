import axios from "axios";
import transactionsActions from "./transaction-actions";

axios.defaults.baseURL = "https://kapusta-srv.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8080";

const setBalance = (balance) => async (dispatch) => {
  dispatch(transactionsActions.setBalanceRequest());
  try {
    const response = await axios.patch("/user/balance", {
      balance: Number(balance),
    });
    console.log(response);
    dispatch(transactionsActions.setBalanceSucces(response.data.balance));
  } catch (error) {
    dispatch(transactionsActions.setBalanceError(error.message));
  }
};
const setIncomes = (income) => async (dispatch) => {
  dispatch(transactionsActions.getIncomesRequest());
  try {
    const response = await axios.get("/user/incomes", income);
    dispatch(transactionsActions.getIncomesSucces(response.data));
  } catch (error) {
    dispatch(transactionsActions.getIncomesError(error.message));
  }
};
const setCosts = (expenses) => async (dispatch) => {
  dispatch(transactionsActions.getCostsRequest());
  try {
    const response = await axios.get("/user/costs", expenses);
    console.log(response.data);
    dispatch(transactionsActions.getCostsSucces(response.data));
  } catch (error) {
    dispatch(transactionsActions.getCostsError(error.message));
  }
};

export default {
  setBalance,
  setIncomes,
  setCosts,
};
