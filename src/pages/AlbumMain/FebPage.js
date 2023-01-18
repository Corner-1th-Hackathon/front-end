import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import FebImage from '../../images/month_feb.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={FebImage}/>
    </NavLink>
  );
};

function FebPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">2월</div>
    </div>
  );
}

export default FebPage;
