import { createAction } from "@reduxjs/toolkit";

const getReportsRequest = createAction("user/getReportsRequest");
const getReportsSuccess = createAction("auth/getReportsSuccess");
const getReportsError = createAction("auth/getReportsError");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getReportsRequest,
  getReportsSuccess,
  getReportsError,
};
