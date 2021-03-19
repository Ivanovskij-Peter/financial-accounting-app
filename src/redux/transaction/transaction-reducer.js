import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import transactionActions from "./transaction-actions";

const balance = createReducer(0, {
  [transactionActions.setBalanceSucces]: (_, { payload }) => payload,
});
const incomes = createReducer([], {
  [transactionActions.addIncomesSucces]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [transactionActions.deleteIncomesSucces]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const costs = createReducer([], {
  [transactionActions.addCostsSucces]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [transactionActions.deleteCostsSucces]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({
  balance,
  incomes,
  costs,
});
