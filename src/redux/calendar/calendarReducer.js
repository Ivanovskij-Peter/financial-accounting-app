import { createReducer } from "@reduxjs/toolkit";
import setDate from "./calendarAction";

const getCurrentDate = function () {
  const date = new Date();

  let month = date.getMonth() + 1;

  month = month.toString();

  if (month.length === 1) {
    month = `0${month}`;
  }

  return `${month}.${date.getDate()}.${date.getFullYear()}`;
};

const dateReducer = createReducer(getCurrentDate(), {
  [setDate]: (state, action) => action.payload,
});

export default dateReducer;
