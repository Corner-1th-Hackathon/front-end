import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import MarImage from '../../images/mar.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={MarImage}/>
    </NavLink>
  );
};

function MarPage() {
  return (
    <MonthButton />
  );
}

export default MarPage;
