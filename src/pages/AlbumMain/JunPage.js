import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import JunImage from '../../images/month_jun.png';
import WriteImage from '../../images/planet.png';

function JunPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">6월</div>
      <WriteButton />
    </div>
  );
}

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={JunImage} alt='메인으로' />
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

export default JunPage;
