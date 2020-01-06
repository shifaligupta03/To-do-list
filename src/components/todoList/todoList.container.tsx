import { connect } from "react-redux";
import * as Redux from "redux";
import { ToDoList } from "./todoList";
import { toggleToDo } from "../../actions/todo";
import { TodoInterface } from "../../interfaces/interfaces";
import { loadState } from "../../libs/localStorage";

interface StateProps {
  tasks: TodoInterface[];
}

interface DispatchProps {
  toggleToDoTask: (task: number) => Redux.Dispatch<any>;
}

function mapStateToProps(state): StateProps {
  return {
    tasks: loadState().todo.todoTasks || []
  };
}

function mapDispatchToProps(dispatch): DispatchProps {
  return {
    toggleToDoTask: (taskId): Redux.Dispatch<any> =>
      dispatch(toggleToDo(taskId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
