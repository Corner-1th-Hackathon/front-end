import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import JunImage from '../../images/month_jun.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={JunImage}/>
    </NavLink>
  );
};

function JunPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">6월</div>
    </div>
  );
}

export default JunPage;
