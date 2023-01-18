import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import MayImage from '../../images/month_may.png';
import WriteImage from '../../images/planet.png';

function MayPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">5월</div>
      <WriteButton />
    </div>
  );
}

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={MayImage} alt='메인으로' />
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

export default MayPage;
