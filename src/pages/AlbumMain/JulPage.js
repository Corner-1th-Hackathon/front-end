import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import JulImage from '../../images/month_jul.png';
import WriteImage from '../../images/planet.png';

function JulPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">7월</div>
      <WriteButton />
    </div>
  );
}

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={JulImage} alt='메인으로' />
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

export default JulPage;
