import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import JulImage from '../../images/jul.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={JulImage}/>
    </NavLink>
  );
};

function JulPage() {
  return (
    <MonthButton />
  );
}

export default JulPage;
