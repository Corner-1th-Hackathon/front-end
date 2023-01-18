import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import NoveImage from '../../images/month_nov.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={NoveImage}/>
    </NavLink>
  );
};

function NovPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">11월</div>
    </div>
  );
}

export default NovPage;
