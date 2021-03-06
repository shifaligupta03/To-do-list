import { RouterState } from "connected-react-router";
export interface TodoInterface {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface ListItemInterface {
  isCompleted: boolean;
}

export enum TODOActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO"
}

export interface BASEACTIONTYPE {
  type: TODOActionTypes;
}

export interface ApplicationReducerState {
  router?: RouterState;
  todo?: AppStateInterface;
}

export interface AppStateInterface {
  todoTasks?: TodoInterface[] | [];
}
