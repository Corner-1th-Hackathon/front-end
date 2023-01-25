import React from "react";
import { NavLink } from "react-router-dom";
import '../css/TagPage.css';
import MoonImage from '../images/moon.png'
import WriteImage from '../images/planet.png';


function TagPage() {
  return (
    <div>
      <MainButton />
      <div className="tagName">#태그</div>
      <WriteButton />
    </div>
  );
}

// 메인페이지 이동
const MainButton = () => {
  return (
    <NavLink to={'/'} className='mainButton'>
      <img src={MoonImage} alt='메인으로' />
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
