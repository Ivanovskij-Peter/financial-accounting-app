import axios from "axios";
import authActions from "./auth-actions";
import transactionsActions from "../transaction/transaction-actions";

axios.defaults.baseURL = "http://kapusta-srv.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8080";

const axiosToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials, history) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post("/auth/register", credentials);

    dispatch(authActions.registerSuccess(response.data));
    history.push("/login");
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post("/auth/login", credentials);
    const { token, user } = response.data;
    const { name, email, avatarURL, isNotVerified } = user;
    axiosToken.set(token);
    dispatch(authActions.loginSuccess({ name, email, avatarURL, token, isNotVerified }));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logInWithGoogle = (googleToken) => async (dispatch) => {
  dispatch(authActions.loginWithGoogleRequest());
  try {
    const response = await axios.post("/auth/login-with-google", googleToken);
    console.log(response);
    const { token, user } = response.data;
    axiosToken.set(token);
    dispatch(
      authActions.loginWithGoogleSuccess({
        name: user.name,
        email: user.email,
        avatarURL: user.avatarURL,
        token,
      }),
    );
  } catch (error) {
    dispatch(authActions.loginWithGoogleError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logOutRequest());
  try {
    await axios.post("/auth/logout");
    axiosToken.unset();
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
  axiosToken.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  try {
    const response = await axios.get("/user");
    const { balance, ...rest } = response.data;
    dispatch(authActions.getCurrentUserSuccess(rest));
    dispatch(transactionsActions.setBalanceSucces(balance));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const authOperations = {
  register,
  logOut,
  getCurrrentUser,
  logIn,
  logInWithGoogle,
};

export default authOperations;
