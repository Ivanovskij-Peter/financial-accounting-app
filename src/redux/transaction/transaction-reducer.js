import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authActions } from "../auth";
import transactionsActions from "./transaction-actions";

const initialState = {
  balance: 0,
  incomes: [],
  costs: [],
  monthIncoms: [],
  monthCosts: []
};

const balance = createReducer(initialState.balance, {
  [transactionsActions.setBalanceSucces]: (_, { payload }) => payload,
  [transactionsActions.setIncomesSucces]: (_, { payload }) => payload.balance,
  [authActions.logOutSuccess]: () => initialState.balance,
  [transactionsActions.setCostsSucces]: (_, { payload }) => payload.balance,
});
const incomes = createReducer(initialState.incomes, {
  [transactionsActions.getIncomesSucces]: (_, { payload }) => payload,
  [transactionsActions.setIncomesSucces]: (state, { payload }) => [
    ...state,
    payload.body,
  ],
  [authActions.logOutSuccess]: () => initialState.incomes,
  [transactionsActions.deleteIncomesSucces]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload._id),
});
const costs = createReducer(initialState.costs, {
  [transactionsActions.getCostsSucces]: (_, { payload }) => payload,
  [transactionsActions.setCostsSucces]: (state, { payload }) => [
    ...state,
    payload.body,
  ],
  [authActions.logOutSuccess]: () => initialState.costs,

  [transactionsActions.deleteCostsSucces]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload._id),
});
const monthIncoms = createReducer(initialState.monthIncoms, {
  [transactionsActions.getMonthIncomesSucces]: (_, { payload }) => payload,
  [authActions.logOutSuccess]: () => initialState.monthIncoms,

});
const monthCosts = createReducer(initialState.monthCosts, {
  [transactionsActions.getMonthCostsSucces]: (_, { payload }) => payload,
  [authActions.logOutSuccess]: () => initialState.monthCosts,

});



export default combineReducers({
  balance,
  incomes,
  costs,
  monthIncoms,
  monthCosts,
});
