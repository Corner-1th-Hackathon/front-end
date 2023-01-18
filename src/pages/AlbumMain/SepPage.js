import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import SepImage from '../../images/month_sep.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={SepImage}/>
    </NavLink>
  );
};

function SepPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">9월</div>
    </div>
  );
}

export default SepPage;
