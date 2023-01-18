import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import JunImage from '../../images/jun.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={JunImage}/>
    </NavLink>
  );
};

function JunPage() {
  return (
    <MonthButton />
  );
}

export default JunPage;
