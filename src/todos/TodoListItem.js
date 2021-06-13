import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) =>
    new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
      ? "none"
      : "2px solid red"};
`;

const TodoItemContainerCompleted = styled(TodoItemContainer)`
  background: #f4f5f7;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

const CompletedButton = styled(Button)`
  background-color: purple;
  color: white;
`;

const RemoveButton = styled(Button)`
  background-color: #ee2222;
  margin-left: 8px;
  color: white;
`;

const CompletedTodoTextItem = styled.h3`
  text-decoration: line-through;
  color: gray;
  font-style: italic;
`;

const TodoListItem = ({ todo, onRemovePressed, onMarkAsCompleted }) => {
  const Container = todo.isCompleted
    ? TodoItemContainerCompleted
    : TodoItemContainerWithWarning;
  return (
    <Container createdAt={todo.createdAt}>
      {todo.isCompleted ? (
        <CompletedTodoTextItem>{todo.text}</CompletedTodoTextItem>
      ) : (
        <h3>{todo.text}</h3>
      )}
      <p>
        Created at:&nbsp;
        {new Date(todo.createdAt).toLocaleDateString()}
      </p>
      <ButtonContainer>
        {todo.isCompleted ? null : (
          <CompletedButton
            onClick={() => onMarkAsCompleted(todo.id)}
            className="completed-button"
          >
            Mark As Completed
          </CompletedButton>
        )}
        <RemoveButton
          onClick={() => onRemovePressed(todo.id)}
          className="remove-button"
        >
          Remove
        </RemoveButton>
      </ButtonContainer>
    </Container>
  );
};

export default TodoListItem;
