import { ADD_TODO, TOGGLE_TODO } from "../actions/todo";
import { AppStateInterface } from "../interfaces/interfaces";
import { loadState } from '../libs/localStorage';

const initialState: AppStateInterface = {
  todoTasks: loadState() || []
};

export default (
  state: AppStateInterface = initialState,
  action
): AppStateInterface => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_TODO: {
      newState.todoTasks = [...newState.todoTasks, action.todoTask];
      break;
    }
    case TOGGLE_TODO: {
      const index = newState.todoTasks.findIndex(
        task => task.id == action.todoTaskId
      );
      newState.todoTasks[index].isCompleted = !newState.todoTasks[index]
        .isCompleted;
      break;
    }
  }
  return newState;
};
