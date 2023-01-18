import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import MayImage from '../../images/may.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={MayImage}/>
    </NavLink>
  );
};

function MayPage() {
  return (
    <MonthButton />
  );
}

export default MayPage;
