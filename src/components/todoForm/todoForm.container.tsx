import { connect } from "react-redux";
import * as Redux from "redux";

import { ToDoForm } from "./todoForm";
import { addToDo } from "../../actions/todo";
import { TodoInterface } from "../../interfaces/interfaces";

export interface AddToDoInterface {
  addToDoTask: (task: TodoInterface) => Redux.Dispatch<any>;
}

function mapDispatchToProps(dispatch): AddToDoInterface {
  return {
    addToDoTask: (task): Redux.Dispatch<any> => dispatch(addToDo(task))
  };
}

export default connect(() => ({}), mapDispatchToProps)(ToDoForm);
