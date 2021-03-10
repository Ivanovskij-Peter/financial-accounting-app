// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import storage from "redux-persist/lib/storage";
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   persistStore,
//   persistReducer,
// } from "redux-persist";
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];
// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };
// const store = configureStore({
//   reducer: {
//     // contacts: contacts,
//     // auth: persistReducer(authPersistConfig, authReducer),
//   },

//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });
// const persistor = persistStore(store);
// export default { store, persistor };
