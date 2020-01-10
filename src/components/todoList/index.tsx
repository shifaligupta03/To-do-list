import { connect } from "react-redux";
import * as Redux from "redux";
import { ToDoList } from "./todo-list";
import { toggleToDo } from "../../actions/todo";
import { TodoInterface } from "../../interfaces/interfaces";
import { loadState } from "../../libs/local-storage";

interface StateProps {
  tasks: TodoInterface[];
}

interface DispatchProps {
  toggleToDoTask: (task: number) => void;
}

function mapStateToProps(): StateProps {
  return {
    tasks: loadState().todo.todoTasks || []
  };
}

function mapDispatchToProps(
  dispatch: (action: Redux.Action) => void
): DispatchProps {
  return {
    toggleToDoTask: (taskId: number): void => dispatch(toggleToDo(taskId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
