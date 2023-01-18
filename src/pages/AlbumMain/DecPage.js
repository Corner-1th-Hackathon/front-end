import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import DecImage from '../../images/month_dec.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={DecImage}/>
    </NavLink>
  );
};

function DecPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">8월</div>
    </div>
  );
}

export default DecPage;
