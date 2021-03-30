import { createAction } from "@reduxjs/toolkit";

const setError = createAction("error/setError");
const setErrorToNull = createAction("error/setErrorToNull");

// eslint-disable-next-line import/no-anonymous-default-export
export default { setError, setErrorToNull };
