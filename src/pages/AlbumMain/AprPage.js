import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import AprImage from '../../images/apr.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={AprImage}/>
    </NavLink>
  );
};

function AprPage() {
  return (
    <MonthButton />
  );
}

export default AprPage;
