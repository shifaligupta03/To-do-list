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

export interface AppStateInterface {
  todoTasks: any[];
}
