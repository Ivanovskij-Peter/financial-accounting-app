/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";

const setBalanceRequest = createAction("user/setBalanceRequest");
const setBalanceSucces = createAction("user/setBalanceSucces");
const setBalanceError = createAction("user/setBalanceError");

const deleteIncomesRequest = createAction("user/deleteIncomesRequest");
const deleteIncomesSucces = createAction("user/deleteIncomesSucces");
const deleteIncomesError = createAction("user/deleteIncomesError");

const deleteCostsRequest = createAction("user/deleteCostsRequest");
const deleteCostsSucces = createAction("user/deleteCostsSucces");
const deleteCostsError = createAction("user/deleteCostsError");

const setIncomesRequest = createAction("user/setIncomesRequest");
const setIncomesSucces = createAction("user/setIncomesSucces");
const setIncomesError = createAction("user/setIncomesError");

const setCostsRequest = createAction("user/ setCostsRequest");
const setCostsSucces = createAction("user/setCostsSucces");
const setCostsError = createAction("user/setCostsError");

const getIncomesRequest = createAction("user/getIncomesRequest");
const getIncomesSucces = createAction("user/getIncomesSucces");
const getIncomesError = createAction("user/getIncomesError");

const getCostsRequest = createAction("user/getCostsRequest");
const getCostsSucces = createAction("user/getCostsSucces");
const getCostsError = createAction("user/getCostsError");

const getMonthIncomesRequest = createAction("user/getMonthIncomesRequest");
const getMonthIncomesSucces = createAction("user/getMonthIncomesSucces");
const getMonthIncomesError = createAction("user/getMonthIncomesError");

const getMonthCostsRequest = createAction("user/getMonthCostsRequest");
const getMonthCostsSucces = createAction("user/getMonthCostsSucces");
const getMonthCostsError = createAction("user/getMonthCostsError");

export default {
  setBalanceRequest,
  setBalanceSucces,
  setBalanceError,
  deleteIncomesRequest,
  deleteIncomesSucces,
  deleteIncomesError,
  deleteCostsRequest,
  deleteCostsSucces,
  deleteCostsError,
  setIncomesRequest,
  setIncomesSucces,
  setIncomesError,
  setCostsRequest,
  setCostsSucces,
  setCostsError,
  getIncomesRequest,
  getIncomesSucces,
  getIncomesError,
  getCostsRequest,
  getCostsSucces,
  getCostsError,
  getMonthIncomesRequest,
  getMonthIncomesSucces,
  getMonthIncomesError,
  getMonthCostsRequest,
  getMonthCostsSucces,
  getMonthCostsError,
};
