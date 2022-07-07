import React from "react";

import { DivData } from "./DivData";
import { Header } from "./Header";

import { Container } from "./styles";

interface HeaderProps {
  todos: string[];
  setTodos: string[];
}

export const MainApp = ({ todos, setTodos }: HeaderProps) => {
  return (
    <Container>
      <Header todos={todos} setTodos={setTodos} />
      <DivData />
    </Container>
  );
};
