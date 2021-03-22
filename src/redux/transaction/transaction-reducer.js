import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import transactionsActions from "./transaction-actions";

const balance = createReducer(0, {
  [transactionsActions.setBalanceSucces]: (_, { payload }) => payload,
  [transactionsActions.setIncomesSucces]: (_, { payload }) => payload.balance,

  [transactionsActions.setCostsSucces]: (_, { payload }) => payload.balance,
});
const incomes = createReducer([], {
  [transactionsActions.getIncomesSucces]: (_, { payload }) => payload,
  [transactionsActions.setIncomesSucces]: (state, { payload }) => [
    ...state,
    payload.body,
  ],
  [transactionsActions.deleteIncomesSucces]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload._id),
});
const costs = createReducer([], {
  [transactionsActions.getCostsSucces]: (_, { payload }) => payload,
  [transactionsActions.setCostsSucces]: (state, { payload }) => [
    ...state,
    payload.body,
  ],
  [transactionsActions.deleteCostsSucces]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload._id),
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
