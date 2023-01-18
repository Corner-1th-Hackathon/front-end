import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import MarImage from '../../images/month_mar.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={MarImage}/>
    </NavLink>
  );
};

function MarPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">3월</div>
    </div>
  );
}

export default MarPage;
