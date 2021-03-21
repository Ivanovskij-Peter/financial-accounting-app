import { createAction } from "@reduxjs/toolkit";

const getReportsRequest = createAction("user/getReportsRequest");
const getReportsSuccess = createAction("user/getReportsSuccess");
const getReportsError = createAction("user/getReportsError");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getReportsRequest,
  getReportsSuccess,
  getReportsError,
};
