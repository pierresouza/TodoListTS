import React from "react";
import Calendario from "../../assets/Calendar.svg";
import { Container } from "./styles";

interface HeaderProps {
  todos: string[];
  setTodos: string[];
}

export const Header = ({ setTodos, todos }: HeaderProps) => {
  const filtrar = (index: string) => {
    let filtro = todos.filter((timesComS) => timesComS.charAt(0) == index);
    console.log("filtro : ", filtro);
    setTodos(filtro);

    if (index == "todos") {
      setTodos(todos);
    }
  };

  return (
    <>
      <Container>
        <div className="container">
          <header>
            <img src={Calendario} alt="" />
            <h1>Today</h1>
          </header>
          <div className="filter">
            <select
              className="filter-items"
              id="filter-todo"
              onChange={(e) => filtrar(e.target.value)}
            >
              <option value="">...</option>
              <option value="completed" className="completed">
                completed
              </option>
              <option value="todos">In Progress</option>
              <option value="Removed">Removed</option>
            </select>
          </div>
        </div>
      </Container>
    </>
  );
};
