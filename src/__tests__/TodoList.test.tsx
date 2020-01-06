import * as React from "react";
import { shallow } from 'enzyme';
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { ToDoList } from '../components/todoList/todoList';
import { ToDoForm } from '../components/todoForm/todoForm';
import { Header } from '../components/header/header';

const addTodo = (list, item) => [item, ...list];

// describe('TodoList Component', () => {

//   beforeAll(() => {
//     Enzyme.configure({ adapter: new Adapter() })
//   })

//   it('renders correctly', () => {
//     const component = shallow(<ToDoList/>)
//     expect(component).toMatchSnapshot()
//   })
// })

// describe('TodoForm Component', () => {

//   beforeAll(() => {
//     Enzyme.configure({ adapter: new Adapter() })
//   })

//   it('renders correctly', () => {
//     const component = shallow(<ToDoForm />)
//     expect(component).toMatchSnapshot()
//   })
// })

describe('Header component', () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() })
  })

  it('renders correctly', () => {
    const component = shallow(<Header />)
    expect(component).toMatchSnapshot()
  })
});

describe('add new Todo', () => {
  it('should add todo to the list', () => {
    const startTodos = [
      { id: 1, text: 'one', isCompleted: false },
      { id: 2, text: 'two', isCompleted: false }
    ]

    const newTodo = { id: 3, text: 'three', isCompleted: false }
    const expected = [
      { id: 3, text: 'three', isCompleted: false },
      { id: 1, text: 'one', isCompleted: false },
      { id: 2, text: 'two', isCompleted: false }
    ]
    const result = addTodo(startTodos, newTodo)
    expect(result).toEqual(expected)
  })
})

it('should not mutate the existing todo array', () => {
  const startTodos = [
    { id: 1, text: 'one', isCompleted: false },
    { id: 2, text: 'two', isCompleted: false }
  ]

  const newTodo = { id: 3, text: 'three', isCompleted: false }
  const result = addTodo(startTodos, newTodo)

  expect(result).not.toBe(startTodos)
})
