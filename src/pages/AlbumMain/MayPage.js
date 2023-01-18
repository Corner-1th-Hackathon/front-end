import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import MayImage from '../../images/month_may.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={MayImage}/>
    </NavLink>
  );
};

function MayPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">5월</div>
    </div>
  );
}

export default MayPage;
