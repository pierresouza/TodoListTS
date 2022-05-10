import React, { useState } from "react";
import { Container } from "./styles";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

export const DivData: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  
  const handleRemoveItem = React.useCallback((todo: string) => {
    let newTodos = [...todos];
    newTodos.splice(todos.indexOf(todo), 1)
    setTodos(newTodos);
  }, [todos]);
  
  return (
    <Container>
      <div className="todo-container">
        <div className="todo-list-items">
          <ul className="todo">
            {todos.map((todo, index) => (
              <>
                <li key={index}>
                  <div className="left">
                    <input  type={"checkbox"} className="checkbtn" />
                    {todo}
                  </div>
                  <IoIosRemoveCircleOutline size={24} className="deletebtn" onClick={e => handleRemoveItem(todo)} />
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
            />
          </div>
        </form>
      </div>
    </Container>
  );
};
