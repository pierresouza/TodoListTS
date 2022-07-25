import React from "react";
import Calendario from "../../assets/Calendar.svg";

import { Container } from "./style";

export const Header = () => {
  return (
    <Container>
      <div className="container">
        <header>
          <img src={Calendario} alt="" />
          <h1>Today</h1>
        </header>
        <div className="filter">
          <select className="filter-items">
            <option value="" selected>
              ...
            </option>
            <option value="" className="completed">
              completed
            </option>
            <option value="">In Progress</option>
            <option value="">Removed</option>
          </select>
        </div>
      </div>
    </Container>
  );
};
