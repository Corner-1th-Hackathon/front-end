import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import AprImage from '../../images/month_apr.png';
import WriteImage from '../../images/planet.png';

function AprPage() {
  return (
    <div>
      <MonthButton />
      <div className="monthName">4월</div>
      <WriteButton />
    </div>
  );
}

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={AprImage} alt='메인으로' />
    </NavLink>
  );
};

// 글쓰기 버튼
const WriteButton = () => {
  return (
    <NavLink to={'/write'} className='wirteButton'>
      <img src={WriteImage} alt='글작성'/>
    </NavLink>
  )
}

export default AprPage;
