import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import OctImage from '../../images/month_oct.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={OctImage}/>
    </NavLink>
  );
};

function OctPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">10월</div>
    </div>
  );
}

export default OctPage;
