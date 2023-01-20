import { combineReducers } from "@reduxjs/toolkit";
import initialReducer from "./initial-reducer";

export default combineReducers({
    initial: initialReducer
})