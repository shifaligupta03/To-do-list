import {
  TODOActionTypes,
  BASEACTIONTYPE,
  TodoInterface
} from "../interfaces/interfaces";

export const ADD_TODO = TODOActionTypes.ADD_TODO;
export const TOGGLE_TODO = TODOActionTypes.TOGGLE_TODO;

export interface ADDTODOAction extends BASEACTIONTYPE {
  type: TODOActionTypes.ADD_TODO;
  todoTask: TodoInterface;
}

export const addToDo = (todoTask): ADDTODOAction => {
  return {
    type: TODOActionTypes.ADD_TODO,
    todoTask
  };
};

export interface TOGGLETODOAction extends BASEACTIONTYPE {
  type: TODOActionTypes.TOGGLE_TODO;
  todoTaskId: number;
}

export const toggleToDo = (todoTaskId): TOGGLETODOAction => {
  return {
    type: TODOActionTypes.TOGGLE_TODO,
    todoTaskId
  };
};
