import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import SepImage from '../../images/sep.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={SepImage}/>
    </NavLink>
  );
};

function SepPage() {
  return (
    <MonthButton />
  );
}

export default SepPage;
