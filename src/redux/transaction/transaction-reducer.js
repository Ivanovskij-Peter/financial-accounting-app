import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import transactionsActions from "./transaction-actions";

const balance = createReducer(0, {
  [transactionsActions.setBalanceSucces]: (_, { payload }) => payload,
});
const incomes = createReducer([], {
  [transactionsActions.getIncomesSucces]: (_, { payload }) => payload,
  [transactionsActions.addIncomesSucces]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [transactionsActions.deleteIncomesSucces]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const costs = createReducer([], {
  [transactionsActions.getCostsSucces]: (_, { payload }) => payload,
  [transactionsActions.addCostsSucces]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [transactionsActions.deleteCostsSucces]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const monthIncoms = createReducer([], {
  [transactionsActions.getMonthIncomesSucces]: (_, { payload }) => payload,
});
const monthCosts = createReducer([], {
  [transactionsActions.getMonthCostsSucces]: (_, { payload }) => payload,
});

export default combineReducers({
  balance,
  incomes,
  costs,
  monthIncoms,
  monthCosts,
});
