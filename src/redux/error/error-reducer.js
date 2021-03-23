import { createReducer } from "@reduxjs/toolkit";
import { authActions } from "../auth/index";
import transactionsActions from "../transaction/transaction-actions";

const initialState = {message: ''}

const error = createReducer(initialState, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.registerRequest]: () => initialState,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.loginRequest]: () => initialState,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.logoutRequest]: () => initialState,

  //TODO добавить очистку ошибки при реквестах
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [transactionsActions.setIncomesError]: (_, { payload }) => payload,
  [transactionsActions.deleteCostsError]: (_, { payload }) => payload,
  [transactionsActions.setCostsError]: (_, { payload }) => payload,
});

export default error;
