import axios from "axios";
import authActions from "./auth-actions";
import api from "../../services/backend.service";
// import { useHistory } from "react-router";

axios.defaults.baseURL = "http://localhost:8080/";

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
    dispatch(authActions.registerError(error.message));
  }
};
// const register = (credentials, history) => (dispatch) => {
//   dispatch(authActions.registerRequest());

//   api
//     .register(credentials)
//     .then(({ data }) => {
//       // TODO надо нормальный ответ давать, а не registrationResp
//       dispatch(authActions.registerSuccess(data));
//     })
//     .then(() => history.push("/login"))
//     .catch((data) => {
//       if (!data.response) {
//         dispatch(authActions.loginError(data.message));
//         return;
//       }
//       dispatch(authActions.registerError(data?.response?.data?.message));
//     });
// };

// const login = (credentials) => (dispatch) => {
//   dispatch(authActions.loginRequest());

//   api
//     .login(credentials)
//     .then(({ data }) => {
//       api.setToken(data.token);
//       dispatch(authActions.loginSuccess(data));
//     })
//     .catch((data) => {
//       if (!data.response) {
//         dispatch(authActions.loginError(data.message));
//         return;
//       }
//       dispatch(authActions.loginError(data?.response?.data?.message));
//     });
// };
const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post("/auth/login", credentials);
    token.set(response.data.token);
    console.log("response.data", response.data);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logOutRequest());
  try {
    await axios.post("/auth/logout");
    api.unsetToken();
    dispatch(authActions.logOutSucces());
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
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const authOperations = { register, logOut, getCurrrentUser, logIn };

export default authOperations;
