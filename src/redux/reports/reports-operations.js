import axios from "axios";
import reportsActions from "./reports-actions";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const getReports = (date) => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(reportsActions.getReportsRequest());
  axios
    .get(`/user/information/${date}`)
    .then((resp) => {
      dispatch(reportsActions.getReportsSuccess(resp.data));
    })
    .catch((err) => dispatch(reportsActions.getReportsError(err.message)));
};

export default getReports;
