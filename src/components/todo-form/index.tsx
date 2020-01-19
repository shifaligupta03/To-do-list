import { connect } from "react-redux";
import * as Redux from "redux";
import { ToDoForm } from "./todoForm";
import { addToDo } from "../../actions/todo";
import { TodoInterface } from "../../interfaces/interfaces";
import { loadState } from "../../libs/local-storage";

export interface AddToDoInterface {
  tasks: TodoInterface[];
  addToDoTask: (task: TodoInterface) => void;
}

function mapDispatchToProps(
  dispatch: (action: Redux.Action) => void
): AddToDoInterface {
  return {
    tasks: loadState().todo.todoTasks || [],
    addToDoTask: (task: TodoInterface): void => dispatch(addToDo(task))
  };
}

export const TodoFormWrapper = connect(
  () => ({}),
  mapDispatchToProps
)(ToDoForm);
