import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import FebImage from '../../images/month_feb.png';
import WriteImage from '../../images/planet.png';


function FebPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">2월</div>
      <WriteButton />
    </div>
  );
}

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={FebImage} alt='메인으로' />
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

export default FebPage;
