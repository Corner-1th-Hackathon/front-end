import React from "react";
import { NavLink } from "react-router-dom";
import '../../css/MonthPage.css';
import "../../css/Tooltip.css"
import MoonImage from '../../images/moon.png'
import WriteImage from '../../images/planet.png';

function NovPage() {
  return (
    <div>
      <MainButton />
      <div className="monthName">11월</div>
      <WriteButton />
    </div>
  );
};

// 각 달에 해당하는 토끼로 메인 페이지 이동
const MainButton = () => {
  return (
    <div className="wrap">
      <span data-tooltip="메인으로">
      <NavLink to={'/'} className='mainButton'>
        <img src={MoonImage} alt='메인으로' />
      </NavLink>              
      </span>
    </div>
  );
}; 

// 글쓰기 버튼, 이동
const WriteButton = () => {
  return (
    <div className="wrap">
      <span write-tooltip="글작성">
        <NavLink to={'/write'} className='wirteButton'>
            <img className="write-btn" src={WriteImage} alt='글작성'/>
        </NavLink>
      </span>
    </div>
  )
}
export default NovPage;
