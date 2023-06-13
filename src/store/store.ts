import { createStore } from "redux";
import { combineReducers } from "redux";
import { changeTheNumber } from "./reducers/updown";

const rootReducer = combineReducers({
    changeTheNumber
})

export const Store = createStore(rootReducer)

export type state = ReturnType<typeof rootReducer>