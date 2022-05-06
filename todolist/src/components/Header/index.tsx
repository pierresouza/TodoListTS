import React from 'react';
import Calendario from '../../assets/Calendar.svg'

import { Container } from './styles';


export const Header: React.FC = () => {
  return (
    <Container>
      <div className="container">
      <header>
        <img src={Calendario} alt="" />
        <h1>Today</h1>
      </header>
        <div className="filter">
          <select className='filter-items' id="filter-todo">
            <option value="">...</option>
            <option value="completed" className='completed'>completed</option>
            <option value="In Progress" className='In Progress'>In Progress</option>
            <option value="Removed" className='Removed'>Removed</option>
          </select>
          </div>
      </div>
    </Container>
  )
}