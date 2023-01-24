import React from "react";
import { NavLink } from "react-router-dom";
import '../css/DetailPage.css';
import JanImage from '../images/1월.png'
import SampleImage from '../images/SampleImage.png'
import Bomb from "../images/bomb.png";
import EmptyHeart from "../images/empty-heart.png";
import FullHeart from "../images/full-heart.png";

// MonthPage에서 month를 받아 버튼을 만듦
function DetailPage({ month }) {
  return (
    <div className="detailPage">
      <MonthButton month={month} />
      <DetailName name={'코너corner'} />
      <DetailPhoto image={SampleImage} />
      <DetailDate date={'2023.01.28'} />
      <DetailTag tags={temp} />
      <hr />
      <DetailLetter letter={tmpletter}/> 
    </div>
  );
};

const temp = [{cont: '코너'}, {cont: '덕성여자대학교'}, {cont: '컴퓨터공학과'}, {cont: '사랑해요'}]
const tmpletter = '코너톤 화이팅~! 저희 팀은 가족, 친구, 애인이 적어준 자신의 사진첩을 만들었습니다. \
좋아하는 음식을 먹을 때의 행복, 사랑하는 사람을 바라보는 표정, 즐거웠던 가족들과의 \
여행. 이러한 소중한 추억을 사진과 간단한 편지로 기억해보세요. 사진과 함께 쓴 \
편지를 통해 앨범을 통해 소중히 간직했던 속마음을 전달해보거나 추억을 생생히 \
저장할 수 있습니다. '

// 해당 달 화면으로 넘어가는 버튼
const MonthButton = ({ month }) => {
  return (
    <div className="wrap">
      <span data-tooltip="앨범으로">
        <NavLink to={`/jan`} className='monthButton'>
          <img src={JanImage} alt='월별 앨범으로' />
        </NavLink>
      </span>
    </div>
  );
};

// 보내는 사람
const DetailName = ({ name }) => {
  return (    
    <div className="detailName">
      By.{name}
    </div>
  )
}

// 사진
const DetailPhoto = ({ image }) => {
  return (
    <div>
      <div className="detail-image-wrapper">
        <img 
          src={image} 
          alt='업로드한 사진'
          className='detailPhoto'
        />
        <div className="detail-additional">
          <img 
            src={EmptyHeart}
            alt="비공개로 전환하기"
            className="empty-icon"
          />
          <img 
            src={FullHeart}
            alt="공개로 전환하기"
            className="full-icon"
          />
          <img 
            src={Bomb}
            alt="삭제하기"
            className="bomb-icon"
          />
        </div>
      </div>
    </div>
  );
};

// 날짜
const DetailDate = ({ date }) => {
  return (
    <div className="detailDate">
      {date}
    </div>
  )
}

// Tag 배열
const DetailTag = ({ tags }) => {
  const tagItem = tags.map((tag) => `#${tag.cont} `)
  return (
    <div className="detailTag">      
      {tagItem}
    </div>
  )
}

// 200자 이내의 편지
const DetailLetter = ({ letter }) => {
  return(
    <p className="detailText">
      {letter}
    </p>
  );
};



export default DetailPage;