import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import SepImage from '../../images/month_sep.png';
import WriteImage from '../../images/planet.png';

function SepPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">9월</div>
      <WriteButton />
    </div>
  );
}

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={SepImage} alt='메인으로' />
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

export default SepPage;
