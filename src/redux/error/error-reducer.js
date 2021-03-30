import { createReducer } from "@reduxjs/toolkit";
import { authActions } from "../auth/index";
import transactionsActions from "../transaction/transaction-actions";
import errorActions from "../error/error-action";

const initialState = null;

const error = createReducer(initialState, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.registerRequest]: () => initialState,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.loginRequest]: () => initialState,
  [authActions.loginWithGoogleError]: (_, { payload }) => payload,
  [authActions.loginWithGoogleRequest]: () => initialState,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.logoutRequest]: () => initialState,
  [errorActions.setError]: () => initialState,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [transactionsActions.setIncomesError]: (_, { payload }) => payload,
  [transactionsActions.deleteCostsError]: (_, { payload }) => payload,
  [transactionsActions.setCostsError]: (_, { payload }) => payload,
  [errorActions.setErrorToNull]: () => null,
});

export default error;
