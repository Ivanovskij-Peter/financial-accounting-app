import { createReducer } from "@reduxjs/toolkit";
import { authActions } from "../auth/index";
import transactionsActions from "../transaction/transaction-actions";

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.registerRequest]: () => null,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.loginRequest]: () => null,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.logoutRequest]: () => null,

  //TODO добавить очистку ошибки при реквестах
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [transactionsActions.setIncomesError]: (_, { payload }) => payload,
  [transactionsActions.deleteCostsError]: (_, { payload }) => payload,
  [transactionsActions.setCostsError]: (_, { payload }) => payload,
});

export default error;
