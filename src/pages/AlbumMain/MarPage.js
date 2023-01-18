import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import MarImage from '../../images/month_mar.png';
import WriteImage from '../../images/planet.png';

function MarPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">3월</div>
      <WriteButton />
    </div>
  );
}

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={MarImage} alt='메인으로' />
    </NavLink>
  );
};

const WriteButton = () => {
  return (
    <NavLink to={'/write'} className='wirteButton'>
      <img src={WriteImage} alt='글작성'/>
    </NavLink>
  )
}

export default MarPage;
