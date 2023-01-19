import React from "react";
import { NavLink } from "react-router-dom";
import './DetailPage.css';
import JanImage from '../images/month_jan.png'

// MonthPage에서 month를 받아 버튼을 만듦
function DetailPage({ month }) {
  return (
    <div className="detailPage">
      <MonthButton month={month} />
      <DetailPhoto/>
      <DetailLetter />
    </div>
  );
};

// 해당 달 화면으로 넘어가는 
const MonthButton = ({ month }) => {
  return (
    <NavLink to={`/${month}`} className='monthButton'>
      <img src={JanImage} alt='월별 앨범으로' />
    </NavLink>
  );
};

const DetailPhoto = ({ image }) => {
  return (
    <img 
      src={image} 
      alt='업로드한 사진'
      className='detailPhoto'
     />
  );
};

const DetailLetter = ({ letter }) => {
  return(
    <textarea
     className="detailText"
     value={letter}
    >
    </textarea>
  );
};

export default DetailPage;
