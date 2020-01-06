import { connect } from "react-redux";
import * as Redux from "redux";
import { ToDoForm } from "./todoForm";
import { addToDo } from "../../actions/todo";
import { TodoInterface } from "../../interfaces/interfaces";

export interface AddToDoInterface {
  addToDoTask: (task: TodoInterface) => void;
}

function mapDispatchToProps(
  dispatch: (action: Redux.Action) => void
): AddToDoInterface {
  return {
    addToDoTask: (task: TodoInterface): void => dispatch(addToDo(task))
  };
}

export default connect(() => ({}), mapDispatchToProps)(ToDoForm);
