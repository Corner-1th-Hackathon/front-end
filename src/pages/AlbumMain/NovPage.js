import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import NoveImage from '../../images/month_nov.png';
import WriteImage from '../../images/planet.png';

function NovPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">11월</div>
      <WriteButton />
    </div>
  );
}

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={NoveImage} alt='메인으로' />
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

export default NovPage;
