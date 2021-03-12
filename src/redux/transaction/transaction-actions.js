/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";

const increment = createAction("user/increment");
const decrement = createAction("user/decrement");

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
  increment,
  decrement,
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
