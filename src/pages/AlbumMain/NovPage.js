import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import NoveImage from '../../images/nov.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={NoveImage}/>
    </NavLink>
  );
};

function NovPage() {
  return (
    <MonthButton />
  );
}

export default NovPage;
