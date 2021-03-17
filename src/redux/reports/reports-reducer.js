import { createReducer } from "@reduxjs/toolkit";
import reportsActions from "./reports-actions";

const initialState = {
  costs: {},
  incomes: {},
  costsArr: [],
  incomesArr: [],
};

const reportsReducer = createReducer(initialState, {
  [reportsActions.getReportsSuccess]: (state, { payload }) => payload,
});
export default reportsReducer;
