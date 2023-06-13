
import { combineReducers } from "redux";
import { changeTheNumber } from "./updown";

export const rootReducer = combineReducers(
    changeTheNumber
)