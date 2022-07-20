import React, { useState } from "react";
import { Container } from "./styles";

import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

export const DivData = ({}) => {
  const [todos, setTodos] = useState<string[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const [removed, setRemoved] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const remover = () => {
    const removed = todos.splice(0, 1);
    setRemoved(removed);
    console.log(removed);
  };

  const checkbox = () => {
    const check = todos.slice(0, 1);
    setChecked(check);
    console.log(check);
  };

  return (
    <Container>
      <div className="todo-container">
        <div className="todo-list-items">
          <ul className="todo">
            {todos.map((todo, index) => (
              <>
                <li key={index}>
                  <div className="left">
                    <input type={"checkbox"} className="checkbtn" onClick={checkbox} />
                    {todo}
                  </div>
                  <IoIosRemoveCircleOutline
                    size={24}
                    className="deletebtn"
                    onClick={() => remover()}
                  />
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
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};
