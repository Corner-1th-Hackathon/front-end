import React from "react";
import { NavLink } from "react-router-dom";
import '../css/DetailPage.css';
import JanImage from '../images/1월.png'
import SampleImage from '../images/SampleImage.png'

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
const tmpletter = '코너톤 화이팅~! 이라고만 적었더니 글씨체랑 크기 설정해놓은게 \
잘 안보여서 길게 쓰는 중입니다. 200자 채우려고 열심히 쓰는데 생각보다 길어서 놀랐습니다. \
이럴줄 알았으면 한글 입숨 쓰는건데 벌써 후회가 되지만 지금 122글자입니다. 특수 문자도 써볼까요\
.“ ^^ &*!@#$ 아직 159글자입니다. 편지 받으면 왜 감동받을지 알겠네요. 제대로 만들어보세'
// 해당 달 화면으로 넘어가는 버튼
const MonthButton = ({ month }) => {
  return (
    <NavLink to={`/jan`} className='monthButton'>
      <img src={JanImage} alt='월별 앨범으로' />
    </NavLink>
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
    <img 
      src={image} 
      alt='업로드한 사진'
      className='detailPhoto'
    />
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
