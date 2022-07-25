import React from "react";

import type { DivDataProps } from "./types";

import { Container, NewItem } from "./styles";

import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

export const DivData = ({
  ischecked,
  setischecked,
  istodos,
  setistodos,
  isremoved,
  setisremoved,
  isvalue,
  setisvalue,
}: DivDataProps) => {
  const handleRemove = () => {
    const remove = istodos.splice(0, 1);
    setisremoved(remove);
    console.log(remove);
  };

  const handleChecked = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setischecked(e.target.checked);
    // change checkbox status from false to true
    console.log(ischecked);
  };

  return (
    <Container>
      <div className="todo-container">
        <div className="todo-list-items">
          <ul className="todo">
            {istodos.map((todos, id) => (
              <>
                <li key={id} value={todos}>
                  <div className="left">
                    <input
                      type={"checkbox"}
                      className="checkbtn"
                      checked={ischecked}
                      onChange={handleChecked}
                    />
                    {todos}
                  </div>
                  <button value={isremoved} onClick={handleRemove}>
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
            if (!!isvalue) {
              setistodos([...istodos, isvalue]);
              setisvalue("");
            }
            setistodos([...istodos, isvalue]);
          }}
        >
          <NewItem>
            <button className="addbutton" type="submit">
              <IoIosAddCircle color="blue" size={24} />
            </button>
            <input
              type="text"
              id="new-task-title"
              value={isvalue}
              onChange={(event) => setisvalue(event.target.value)}
              placeholder="Create New Item"
              required
            />
          </NewItem>
        </form>
      </div>
    </Container>
  );
};
