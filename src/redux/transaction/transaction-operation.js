import axios from "axios";
import transactionActions from "./transaction-actions";

import transactionsActions from "./transaction-actions";

// axios.defaults.baseURL = "https://kapusta-srv.herokuapp.com";
axios.defaults.baseURL = "http://localhost:8080";

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
const setIncomes = (income) => async (dispatch) => {
  dispatch(transactionsActions.setIncomesRequest());
  try {
    const response = await axios.post("/user/incomes", income);
    dispatch(transactionsActions.setIncomesSucces(response.data));
  } catch (error) {
    dispatch(transactionsActions.setIncomesError(error.message));
  }
};
const setCosts = (expenses) => async (dispatch) => {
  dispatch(transactionsActions.setCostsRequest());
  try {
    const response = await axios.post("/user/costs", expenses);
    console.log(response.data);
    dispatch(transactionsActions.setCostsSucces(response.data));
  } catch (error) {
    dispatch(transactionsActions.setCostsError(error.message));
  }
};

const getIncomes = (credentials) => async (dispatch) => {
  dispatch(transactionsActions.getIncomesRequest());
  try {
    const response = await axios.get("/user/operations", credentials);
    dispatch(
      transactionActions.getIncomesSucces(response.data.operations.incomes),
    );
  } catch (error) {
    dispatch(transactionsActions.getIncomesError(error.message));
  }
};

const getCosts = (credentials) => async (dispatch) => {
  dispatch(transactionsActions.getCostsRequest());
  try {
    const response = await axios.get("/user/operations", credentials);
    dispatch(transactionActions.getCostsSucces(response.data.operations.costs));
  } catch (error) {
    dispatch(transactionsActions.getCostsError(error.message));
  }
};

const deleteIncomes = (incomeId) => async (dispatch) => {
  dispatch(transactionsActions.deleteIncomesRequest());
  try {
    await axios.delete(`/incomes/${incomeId}`);
    dispatch(transactionsActions.deleteIncomesSucces(incomeId));
  } catch (error) {
    dispatch(transactionsActions.deleteIncomesError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setBalance,
  setIncomes,
  setCosts,
  getIncomes,
  getCosts,
  deleteIncomes,
};
