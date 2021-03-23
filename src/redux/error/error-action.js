import { createAction } from "@reduxjs/toolkit";

const setError = createAction("error/setError");

// eslint-disable-next-line import/no-anonymous-default-export
export default { setError };
