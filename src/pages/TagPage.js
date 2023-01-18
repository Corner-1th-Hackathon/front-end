import React from "react";
import { NavLink } from "react-router-dom";
import './TagPage.css';
import JanImage from '../images/month_jan.png';
import WriteImage from '../images/planet.png';


function TagPage() {
  return (
    <div>
      <MonthButton />
      <div className="tagName">#태그</div>
      <WriteButton />
    </div>
  );
}

// 메인페이지로 가는 버튼
const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={JanImage} alt='메인으로' />
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

export default TagPage;
