import * as React from "react";
import { shallow } from "enzyme";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { ToDoList } from "../components/todoList/todo-list";
import { ToDoForm } from "../components/todo-form/todoForm";
import { Header } from "../components/header/header";

const addTodo = (list, item) => [item, ...list];

// describe("TodoList Component", () => {
//   const startTodos = [];
//   beforeAll(() => {
//     Enzyme.configure({ adapter: new Adapter() });
//   });

//   it("renders correctly", () => {
//     const component = shallow(<ToDoList tasks={startTodos} toggleToDoTask={() => {}} />);
//     expect(component).toMatchSnapshot();
//   });
// });

// describe("TodoForm Component", () => {
//   const startTodos = [];
//   beforeAll(() => {
//     Enzyme.configure({ adapter: new Adapter() });
//   });

//   it("renders correctly", () => {
//     const component = shallow(<ToDoForm addToDoTask={task => [...startTodos, task]} />);
//     expect(component).toMatchSnapshot();
//   });
// });

// describe("Header component", () => {
//   beforeAll(() => {
//     Enzyme.configure({ adapter: new Adapter() });
//   });

//   it("renders correctly", () => {
//     const component = shallow(<Header />);
//     expect(component).toMatchSnapshot();
//   });
// });

// describe("add new Todo", () => {
//   it("should add todo to the list", () => {
//     const startTodos = [
//       { id: 1, text: "one", isCompleted: false },
//       { id: 2, text: "two", isCompleted: false }
//     ];

//     const newTodo = { id: 3, text: "three", isCompleted: false };
//     const expected = [
//       { id: 3, text: "three", isCompleted: false },
//       { id: 1, text: "one", isCompleted: false },
//       { id: 2, text: "two", isCompleted: false }
//     ];
//     const result = addTodo(startTodos, newTodo);
//     expect(result).toEqual(expected);
//   });
// });

// it("should not mutate the existing todo array", () => {
//   const startTodos = [
//     { id: 1, text: "one", isCompleted: false },
//     { id: 2, text: "two", isCompleted: false }
//   ];

//   const newTodo = { id: 3, text: "three", isCompleted: false };
//   const result = addTodo(startTodos, newTodo);

//   expect(result).not.toBe(startTodos);
// });
