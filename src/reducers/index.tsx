import { combineReducers, Reducer } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import todoReducer from "./todo";
import { AppStateInterface } from "../interfaces/interfaces";

export interface ApplicationState {
  router: RouterState;
  todo: AppStateInterface;
}

export const rootReducer = (history): Reducer<ApplicationState> =>
  combineReducers<ApplicationState>({
    router: connectRouter(history),
    todo: todoReducer
  });
