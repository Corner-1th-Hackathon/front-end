import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import FebImage from '../../images/feb.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={FebImage}/>
    </NavLink>
  );
};

function FebPage() {
  return (
    <MonthButton />
  );
}

export default FebPage;
