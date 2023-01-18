import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import JulImage from '../../images/month_jul.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={JulImage}/>
    </NavLink>
  );
};

function JulPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">7월</div>
    </div>
  );
}

export default JulPage;
