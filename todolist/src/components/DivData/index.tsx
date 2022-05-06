import React from "react";
import { Container } from "./styles";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";


export const DivData: React.FC = () => {

  return (
    <Container>
      <div className="todo-container">
        <div className="todo-list">
          <ul id="todo-list-container" className="todo-list">
            <button className="checkbtn" id="checkbtn">
              <IoIosCheckmarkCircleOutline size={20} />
            </button>
            <li>teste</li>
            <button className="deletebtn" id="deletebtn">
              <IoIosRemoveCircleOutline size={20} />
            </button>
          </ul>
        </div>
        <div className="container-new-item">
          <button className="addbutton" id="add-new-item">
            <IoIosAddCircle color="blue" size={24} />
          </button>
          <input
            type="text"
            id="input-new-item"
            placeholder="Create New Item"
          />
        </div>
      </div>
    </Container>
  );
};
