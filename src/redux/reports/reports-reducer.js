import { createReducer } from "@reduxjs/toolkit";
import reportsActions from "./reports-actions";

const reportsReducer = createReducer(
  {},
  {
    [reportsActions.getReportsSuccess]: (state, { payload }) => payload,
  },
);
export default reportsReducer;
