import React, { useState } from "react";
import { Container } from "./styles";

import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

export const DivData = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");


  const remover = (index: string) => {
    const removed = todos.filter((item) => item !== index);
    setTodos(removed);
    console.log(removed)
  };


  const checkbox = (index:string) => {
    const checkItem = todos.filter((check) => check !== index )
    setTodos(checkItem)
    console.log(checkItem)
  };


  const filtrar = (index: string) => {

    let filtro = todos.filter((timesComS => timesComS.charAt(0) == index))
    console.log("filtro : ", filtro)
    setTodos(filtro)

    if(index == "todos"){
      setTodos(todos)
    }
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
                    <input type={"checkbox"} className="checkbtn" onChange={() => checkbox(todo)}/>
                    {todo}
                  </div>
                  <IoIosRemoveCircleOutline
                    size={24} className="deletebtn" onClick={() => remover(todo)} />
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

