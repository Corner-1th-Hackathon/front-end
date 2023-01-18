import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import AugImage from '../../images/month_aug.png';
import WriteImage from '../../images/planet.png';

function AugPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">8월</div>
      <WriteButton />
    </div>
  );
}

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={AugImage} alt='메인으로' />
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

export default AugPage;
