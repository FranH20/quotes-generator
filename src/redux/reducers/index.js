import { combineReducers } from "@reduxjs/toolkit";
import initialReducer from "./initial-reducer";
import quoteReducer from "./quote-reducer";

export default combineReducers({
    initial: initialReducer,
    quote: quoteReducer,
})