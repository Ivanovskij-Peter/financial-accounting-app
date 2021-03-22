import axios from "axios";
import transactionsActions from "./transaction-actions";

axios.defaults.baseURL = "https://kapusta-srv.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8080";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const setBalance = (balance) => async (dispatch) => {
  dispatch(transactionsActions.setBalanceRequest());
  try {
    const response = await axios.patch("/user/balance", {
      balance: Number(balance),
    });
    dispatch(transactionsActions.setBalanceSucces(response.data.balance));
  } catch (error) {
    dispatch(transactionsActions.setBalanceError(error.message));
  }
};

const addTransaction = (keyWord, transaction) => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(transactionsActions.setIncomesRequest());
  dispatch(transactionsActions.setCostsRequest());
  try {
    const response = await axios.post(`/user/${keyWord}`, transaction);
    if (keyWord === "incomes") {
      dispatch(transactionsActions.setIncomesSucces(response.data));
    } else if (keyWord === "costs") {
      dispatch(transactionsActions.setCostsSucces(response.data));
    }
  } catch (error) {
    dispatch(transactionsActions.setCostsError(error.message));
    dispatch(transactionsActions.setIncomesError(error.message));
  }
};

// const setIncomes = (date, category, description, amount) => async (
//   dispatch,
// ) => {
//   const income = {
//     date,
//     category,
//     description,
//     amount,
//   };
//   dispatch(transactionsActions.setIncomesRequest());
//   try {
//     const response = await axios.post("/user/incomes", income);
//     dispatch(transactionsActions.setIncomesSucces(response.data));
//   } catch (error) {
//     dispatch(transactionsActions.setIncomesError(error.message));
//   }
// };

// const setCosts = (expenses) => async (dispatch) => {
//   dispatch(transactionsActions.setCostsRequest());
//   try {
//     const response = await axios.post("/user/costs", expenses);
//     dispatch(transactionsActions.setCostsSucces(response.data));
//   } catch (error) {
//     dispatch(transactionsActions.setCostsError(error.message));
//   }
// };

const getMonthIncomes = (credentials) => async (dispatch) => {
  dispatch(transactionsActions.getIncomesRequest());
  try {
    const response = await axios.get("/user/monthincomes", credentials);
    const { incomes } = response.data;
    dispatch(transactionsActions.getMonthIncomesSucces(incomes));
  } catch (error) {
    dispatch(transactionsActions.getMonthIncomesError(error.message));
  }
};

const getMonthCosts = (credentials) => async (dispatch) => {
  dispatch(transactionsActions.getMonthCostsRequest());
  try {
    const response = await axios.get("/user/monthcosts", credentials);
    const { costs } = response.data;
    dispatch(transactionsActions.getMonthCostsSucces(costs));
  } catch (error) {
    dispatch(transactionsActions.getMonthCostsError(error.message));
  }
};

const getCosts = (credentials) => async (dispatch) => {
  dispatch(transactionsActions.getCostsRequest());
  try {
    const response = await axios.get("/user/operations", credentials);
    dispatch(
      transactionsActions.getCostsSucces(response.data.operations.costs),
    );
  } catch (error) {
    dispatch(transactionsActions.getCostsError(error.message));
  }
};

const getIncomes = (credentials) => async (dispatch) => {
  dispatch(transactionsActions.getIncomesRequest());
  try {
    const response = await axios.get("/user/operations", credentials);
    dispatch(
      transactionsActions.getIncomesSucces(response.data.operations.incomes),
    );
    console.log("response.data:", response.data);
  } catch (error) {
    dispatch(transactionsActions.getIncomesError(error.message));
  }
};

const deleteIncomes = (id) => async (dispatch) => {
  dispatch(transactionsActions.deleteIncomesRequest());
  try {
    await axios.delete(`/user/incomes/${id}`);
    dispatch(transactionsActions.deleteIncomesSucces(id));
  } catch (error) {
    dispatch(transactionsActions.deleteIncomesError(error.message));
  }
};
const deleteCosts = (incomeId) => async (dispatch) => {
  dispatch(transactionsActions.deleteCostsRequest());
  try {
    await axios.delete(`/user/incomes/${incomeId}`);
    dispatch(transactionsActions.deleteCostsSucces(incomeId));
  } catch (error) {
    dispatch(transactionsActions.deleteCostsError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setBalance,
  addTransaction,
  getMonthIncomes,
  getMonthCosts,
  getCosts,
  getIncomes,
  deleteIncomes,
  deleteCosts,
};
