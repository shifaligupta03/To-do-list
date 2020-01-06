import { combineReducers, Reducer } from "redux";
import { connectRouter } from "connected-react-router";
import todoReducer from "./todo";
import { ApplicationReducerState } from "../interfaces/interfaces";

export const rootReducer = (history): Reducer<ApplicationReducerState> =>
  combineReducers<ApplicationReducerState>({
    router: connectRouter(history),
    todo: todoReducer
  });
