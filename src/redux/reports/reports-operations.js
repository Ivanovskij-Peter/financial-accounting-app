import axios from "axios";
import reportsActions from "./reports-actions";

axios.defaults.baseURL = "http://localhost:8080/";

const getReports = (date) => (dispatch) => {
  dispatch(reportsActions.getReportsRequest());
  axios
    .get(`/user/information/${date}`)
    .then((resp) => {
      console.log(resp);
      dispatch(reportsActions.getReportsSuccess(resp));
    })
    .catch((err) => dispatch(reportsActions.getReportsError(console.log(err))));
};

export default getReports;
