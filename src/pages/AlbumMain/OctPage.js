import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import OctImage from '../../images/month_oct.png';
import WriteImage from '../../images/planet.png';

function OctPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">10월</div>
      <WriteButton />
    </div>
  );
}

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={OctImage} alt='메인으로' />
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

export default OctPage;
