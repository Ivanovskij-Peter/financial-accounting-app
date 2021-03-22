import axios from "axios";
import authActions from "./auth-actions";
import transactionsActions from "../transaction/transaction-actions";

axios.defaults.baseURL = "http://kapusta-srv.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post("/auth/register", credentials);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post("/auth/login", credentials);
    const { token, name, email, avatarURL } = response.data;
    dispatch(authActions.loginSuccess({ name, email, avatarURL, token }));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logOutRequest());
  try {
    await axios.post("/auth/logout");
    token.unset();
    dispatch(authActions.logOutSuccess());
  } catch (error) {
    dispatch(authActions.logOutError(error.message));
  }
};

const getCurrrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  try {
    const response = await axios.get("/user");
    dispatch(authActions.getCurrentUserSuccess(response.data));
    dispatch(transactionsActions.setBalanceSucces(response.data.balance));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const authOperations = { register, logOut, getCurrrentUser, logIn };

export default authOperations;
