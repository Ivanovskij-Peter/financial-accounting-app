import authActions from "./auth-actions";
import api from "../../services/backend.service";

const register = (credentials, history) => (dispatch) => {
  dispatch(authActions.registerRequest());

  api
    .register(credentials)
    .then(({ data }) => {
      // TODO надо нормальный ответ давать, а не registrationResp
      dispatch(authActions.registerSuccess(data));
    })
    .then(() => history.push("/login"))
    .catch((data) => {
      if (!data.response) {
        dispatch(authActions.loginError(data.message));
        return;
      }
      dispatch(authActions.registerError(data?.response?.data?.message));
    });
};

const login = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  api
    .login(credentials)
    .then(({ data }) => {
      api.setToken(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch((data) => {
      if (!data.response) {
        dispatch(authActions.loginError(data.message));
        return;
      }
      dispatch(authActions.loginError(data?.response?.data?.message));
    });
};

const authOperations = { register, login };

export default authOperations;
