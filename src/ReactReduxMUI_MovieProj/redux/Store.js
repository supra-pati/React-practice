import { configureStore } from "@reduxjs/toolkit";
import watcherSaga from "../sagas";
import searchReduser from "./Search";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    search: searchReduser,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
  },
});

sagaMiddleware.run(watcherSaga);

export default Store;
