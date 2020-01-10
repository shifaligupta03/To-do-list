import * as React from "react";
import styled from "@emotion/styled";
import { TodoInterface } from "../../interfaces/interfaces";

const FormContainer = styled("form")`
  padding: 10px 0;
  display: flex;
`;

const FormInput = styled("input")`
  font-size: 16px;
  width: 400px;
  border: 1px solid #3d3158;
  padding: 10px;
  color: #3d3158;
`;
const FormSubmit = styled("input")`
  border: 1px solid #3d3158;
  color: #3d3158;
  font-size: 14px;
  cursor: pointer;
  padding: 0 20px;
`;

interface ToDoFormProps {
  tasks: TodoInterface[];
  addToDoTask: (task: TodoInterface) => void;
}

export const ToDoForm: React.FC<ToDoFormProps> = ({
  tasks,
  addToDoTask
}: ToDoFormProps) => {
  const addTaskField = React.useRef(null);

  React.useEffect(()=>{
    addTaskField.current.value = null;
  }, [tasks]);

  const convertTimeInMilliseconds = (): number => {
    const date: Date = new Date();
    return date.getTime();
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): boolean | void => {
    e.preventDefault();
    if (!addTaskField.current.value) {
      addTaskField.current.focus();
      return false;
    }
    addToDoTask({
      id: convertTimeInMilliseconds(),
      text: addTaskField.current.value,
      isCompleted: false
    });
    addTaskField.current.value = null;
  };

  return (
    <FormContainer
      onSubmit={handleSubmit}
    >
      <FormInput
        type="text"
        placeholder="Enter your to do here"
        ref={addTaskField}
      />
      <FormSubmit type="Submit" value="Add" readOnly />
    </FormContainer>
  );
};
