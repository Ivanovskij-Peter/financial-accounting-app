import axios from "axios";
import reportsActions from "./reports-actions";

axios.defaults.baseURL = "https://kapusta-srv.herokuapp.com";
// axios.defaults.baseURL = "https://localhost:8080";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const getReports = (date) => (dispatch) => {
  token.set();
  dispatch(reportsActions.getReportsRequest());
  axios
    .get(`/user/information/${date}`)
    .then((resp) => {
      dispatch(reportsActions.getReportsSuccess(resp));
      console.log("ffffffffff", resp);
    })
    .catch((err) => dispatch(reportsActions.getReportsError(console.log(err))));
};

export default getReports;
