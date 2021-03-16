/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";

const setBalanceRequest = createAction("user/setBalanceRequest");
const setBalanceSucces = createAction("user/setBalanceSucces");
const setBalanceError = createAction("user/setBalanceError");

const addIncomesRequest = createAction("user/addIncomesRequest");
const addIncomesSucces = createAction("user/addIncomesSucces");
const addIncomesError = createAction("user/addIncomesError");

const deleteIncomesRequest = createAction("user/deleteIncomesRequest");
const deleteIncomesSucces = createAction("user/deleteIncomesSucces");
const deleteIncomesError = createAction("user/deleteIncomesError");

const addCostsRequest = createAction("user/addCostsRequest");
const addCostsSucces = createAction("user/addCostsSucces");
const addCostsError = createAction("user/addCostsError");

const deleteCostsRequest = createAction("user/deleteCostsRequest");
const deleteCostsSucces = createAction("user/deleteCostsSucces");
const deleteCostsError = createAction("user/deleteCostsError");

export default {
  setBalanceRequest,
  setBalanceSucces,
  setBalanceError,
  addIncomesRequest,
  addIncomesSucces,
  addIncomesError,
  deleteIncomesRequest,
  deleteIncomesSucces,
  deleteIncomesError,
  addCostsRequest,
  addCostsSucces,
  addCostsError,
  deleteCostsRequest,
  deleteCostsSucces,
  deleteCostsError,
};
