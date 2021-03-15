import { createReducer } from "@reduxjs/toolkit";
import { authActions } from "../auth/index";
import transactionActions from "../transaction/transaction-actions";

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.registerRequest]: () => null,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.loginRequest]: () => null,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.logoutRequest]: () => null,

  //TODO добавить очистку ошибки при реквестах
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [transactionActions.addIncomesError]: (_, { payload }) => payload,
  [transactionActions.deleteCostsError]: (_, { payload }) => payload,
  [transactionActions.addCostsError]: (_, { payload }) => payload,
});

export default error;
