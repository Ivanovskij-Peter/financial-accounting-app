import { createAction } from "@reduxjs/toolkit";

const getReportsRequest = createAction("user/getReportsRequest");
const getReportsSuccess = createAction("auth/getReportsSuccess");
const getReportsError = createAction("auth/getReportsError");

export default {
  getReportsRequest,
  getReportsSuccess,
  getReportsError,
};
