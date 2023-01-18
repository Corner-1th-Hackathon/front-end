import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import AugImage from '../../images/month_aug.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={AugImage}/>
    </NavLink>
  );
};

function AugPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">8월</div>
    </div>
  );
}

export default AugPage;
