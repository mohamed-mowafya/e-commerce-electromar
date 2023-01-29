import { configureStore, combineReducers } from "@reduxjs/toolkit";

const userState = {
  email: null,
  authenticated: false,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case "SET_AUTHENTICATED":
      return { ...state, authenticated: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ user: userReducer });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
