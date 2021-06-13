import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { loadTodos, removeTodoRequest, markTodoAsCompleted } from "./thunks";
import {
  getTodosLoading,
  getTodos,
  getCompletedTodos,
  getIncompleteTodos,
} from "./selectors";

const BigTextDiv = styled.div`
  font-size: 40px;
  color: #ff0000;
  text-align: center;
  margin-bottom: 30px;
  font-family: "Sigmar One", cursive;
`;

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({
  todos,
  onRemovePressed,
  onMarkAsCompleted,
  isLoading,
  startLoadingTodos,
  completedTodos,
  incompletedTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <ListWrapper>
      <BigTextDiv>TO-DO</BigTextDiv>
      <NewTodoForm />
      <h3>Incomplete Todos: </h3>
      {incompletedTodos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkAsCompleted={onMarkAsCompleted}
        />
      ))}
      <hr style={{ marginTop: "30px", boxShadow: "0 0 4px grey" }} />
      <h3>Completed Todos: </h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkAsCompleted={onMarkAsCompleted}
        />
      ))}
    </ListWrapper>
  );
};

const mapStateToProps = (state) => ({
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkAsCompleted: (id) => dispatch(markTodoAsCompleted(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
