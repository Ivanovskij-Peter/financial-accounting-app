import authActions from "./auth-actions";
import api from "../../services/backend.service";

const register = (credentials, history) => (dispatch) => {
  dispatch(authActions.registerRequest());

  api
    .register(credentials)
    .then(({ data }) => {
      // TODO надо нормальный ответ давать, а не registrationResp
      dispatch(authActions.registerSuccess(data.registrationResp));
    })
    .then(() => history.push("/login"))
    .catch(({ response: { data } }) =>
      dispatch(authActions.registerError(data.message)),
    );
};

const login = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  api
    .login(credentials)
    .then(({ data }) => {
      console.log(data);
      api.setToken(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(({ response: { data } }) => {
      dispatch(authActions.loginError(data.message));
    });
};

const authOperations = { register, login };

export default authOperations;
