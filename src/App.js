import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";

import "./App.css";
import TodoList from "./todos/TodoList";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: "Roboto Slab", serif, Arial, Helvetica, sans-serif;
  color: #222222;
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <AppContainer>
    <TodoList />
  </AppContainer>
);

export default hot(module)(App);
