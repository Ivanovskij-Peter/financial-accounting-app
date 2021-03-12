import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const logOutRequest = createAction("auth/logOutRequest");
const logOutSucces = createAction("auth/logOutSucces");
const logOutError = createAction("auth/logOutError");

const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
const getCurrentUserSucces = createAction("auth/getCurrentUserSucces");
const getCurrentUserError = createAction("auth/getCurrentUserError");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logOutRequest,
  logOutSucces,
  logOutError,
  getCurrentUserRequest,
  getCurrentUserSucces,
  getCurrentUserError,
};
