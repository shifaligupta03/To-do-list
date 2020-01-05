import { connect } from "react-redux";
import * as Redux from "redux";
import { ToDoList } from "./todoList";
import { toggleToDo } from "../../actions/todo";
import { TodoInterface } from "../../interfaces/interfaces";

interface StateProps {
  tasks: TodoInterface[];
}

interface DispatchProps {
  toggleToDoTask: (task: number) => Redux.Dispatch<any>;
}

function mapStateToProps(state): StateProps {
  return {
    tasks: JSON.parse(localStorage.getItem("todoTasks")) || []
  };
}

function mapDispatchToProps(dispatch): DispatchProps {
  return {
    toggleToDoTask: (taskId): Redux.Dispatch<any> =>
      dispatch(toggleToDo(taskId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
