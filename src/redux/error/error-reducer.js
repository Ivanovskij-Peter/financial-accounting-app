import { createReducer } from "@reduxjs/toolkit";
import { authActions } from "../auth/index";
import transactionActions from "../transaction/transaction-actions";

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
  [transactionActions.addIncomesError]: (_, { payload }) => payload,
  [transactionActions.deleteCostsError]: (_, { payload }) => payload,
  [transactionActions.addCostsError]: (_, { payload }) => payload,
});

export default error;
