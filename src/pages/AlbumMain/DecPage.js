import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import DecImage from '../../images/dec.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={DecImage}/>
    </NavLink>
  );
};

function DecPage() {
  return (
    <MonthButton />
  );
}

export default DecPage;
