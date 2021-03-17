import axios from "axios";
import reportsActions from "./reports-actions";

axios.defaults.baseURL = "http://kapusta-srv.herokuapp.com";
// axios.defaults.baseURL = "https://localhost:8080";

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
      console.log("ffffffffff", resp);
    })
    .catch((err) => dispatch(reportsActions.getReportsError(console.log(err))));
};

export default getReports;
