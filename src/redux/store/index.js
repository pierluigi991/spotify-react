import { combineReducers, configureStore } from "@reduxjs/toolkit";
import firstReducers from "../reducers/firstReducers";

const rootReducer = combineReducers({
  first: firstReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
