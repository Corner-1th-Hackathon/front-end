import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import JanImage from '../../images/month_jan.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={JanImage}/>
    </NavLink>
  );
};

function JanPage() {  
  return (
    <div>
      <MonthButton />
      <div className="monthName">1월</div>
    </div>
  );
}

export default JanPage;