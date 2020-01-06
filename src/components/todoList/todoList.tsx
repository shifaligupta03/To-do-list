import * as React from "react";
import styled from "@emotion/styled";
import { TodoInterface, ListItemInterface } from "../../interfaces/interfaces";

const ListItem = styled.li<ListItemInterface>`
  font-weight: bold;
  text-decoration: ${({ isCompleted }): string =>
    isCompleted ? "line-through" : "none"};
`;
const RemainingTodosContainer = styled.div`
  font-weight: bold;
  padding: 10px;
`;
const ListItemText = styled.span`
  cursor: pointer;
`;

interface ToDoListProps {
  tasks: TodoInterface[];
  toggleToDoTask: (task: number) => void;
}

export const ToDoList: React.FC<ToDoListProps> = ({
  tasks = [],
  toggleToDoTask
}) => {
  const [allTasks, setTasks] = React.useState(tasks);

  React.useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  const renderTasks = (): JSX.Element[] =>
    allTasks.map(({ id, isCompleted, text }: TodoInterface) => (
      <ListItem key={id} isCompleted={isCompleted}>
        <ListItemText onClick={(): void => toggleToDoTask(id)}>
          {text}
        </ListItemText>
      </ListItem>
    ));

  const leftTodos = (): number => {
    const remainingTodos = allTasks.filter(task => !task.isCompleted);
    return remainingTodos.length;
  };

  return (
    <>
      <RemainingTodosContainer>
        Total todos remaining: {leftTodos()} out of {allTasks.length}.
      </RemainingTodosContainer>
      <ul>{renderTasks()}</ul>
    </>
  );
};
