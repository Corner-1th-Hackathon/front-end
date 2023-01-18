import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import AprImage from '../../images/month_apr.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={AprImage}/>
    </NavLink>
  );
};

function AprPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">4월</div>
    </div>
  );
}

export default AprPage;
