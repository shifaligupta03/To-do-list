import * as React from "react";
import styled from "@emotion/styled";
import { Header } from "../components/header/header";
import ToDoForm from "../components/todo-form/index";
import ToDoList from "../components/todoList";

const Container = styled("div")`
  background-color: #fff;
  padding: 20px 20px 10px 20px;
  width: 600px;
  margin: 30px auto;
  border: 1px solid #ddd;
  border-radius: 2px;
  position: relative;
`;

export const ToDoPage: React.StatelessComponent<{}> = () => (
  <Container>
    <Header />
    <ToDoForm />
    <ToDoList />
  </Container>
);
