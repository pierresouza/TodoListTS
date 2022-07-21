import React, { useState } from "react";
import { Container, HeaderContainer } from "./styles";
import Calendario from "../../assets/Calendar.svg";

import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

export const DivData = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [check, setCheck] = React.useState(false);
  const [removed, setRemoved] = useState<string[]>([]);

  const remover = () => {
    const removed = todos.splice(0, 1);
    setRemoved(removed);
    console.log(removed);
  };

  const handleChecked = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setCheck(e.target.checked);
    // altera o estado da checkbox de false para true, ou vice-versa
    console.log(check);
  };

  return (
    <Container>
      <HeaderContainer>
        <div className="container">
          <header>
            <img src={Calendario} alt="" />
            <h1>Today</h1>
          </header>
          <div className="filter">
            <select className="filter-items" id="filter-todo">
              <option value="">...</option>
              <option value="completed" className="completed">
                completed
              </option>
              <option value="todos">In Progress</option>
              <option value="Removed">Removed</option>
            </select>
          </div>
        </div>
      </HeaderContainer>
      <div className="todo-container">
        <div className="todo-list-items">
          <ul className="todo">
            {todos.map((todo, id) => (
              <>
                <li key={id} value={todo}>
                  <div className="left">
                    <input
                      type={"checkbox"}
                      className="checkbtn"
                      checked={check}
                      onChange={handleChecked}
                    />
                    {todo}
                  </div>
                  <button value={removed} onClick={() => remover()}>
                    <IoIosRemoveCircleOutline size={24} className="deletebtn" />
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!!value) {
              setTodos([...todos, value]);
              setValue("");
            }
            setTodos([...todos, value]);
          }}
        >
          <div className="container-new-item">
            <button className="addbutton" type="submit">
              <IoIosAddCircle color="blue" size={24} />
            </button>
            <input
              type="text"
              id="new-task-title"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Create New Item"
              required
              // autoComplete="off"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};
