import { combineReducers } from "redux";
import initialReducer from "./initial-reducer";
import quoteSlice from "../sliders/quoteSlice";

export default combineReducers({
    initial: initialReducer,
    quote: quoteSlice,
})