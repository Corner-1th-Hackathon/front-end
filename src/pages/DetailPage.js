import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../css/DetailPage.css';
import JanImage from '../images/1월.png'
import SampleImage from '../images/SampleImage.png';
import Bomb from "../images/bomb.png";
import EmptyHeart from "../images/empty-heart.png";
import FullHeart from "../images/full-heart.png";


function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
  }, []);
  return [data, loading];
}

// MonthPage에서 month를 받아 버튼을 만듦
function DetailPage({ month }) {
  const paths = window.location.href.split('/');
  const url = '/' + paths[paths.length - 2] + '/' + paths[paths.length - 1];
  const [data, loading] = useFetch(url);
  const name = useRef();
  const date = useRef();
  const letter = useRef();
  const image = useRef();

  if (loading) {
    return (
      <div>loading</div>
    )
  } else {
    let src='';
    let image_url = '';
    console.log('image:'+data.image);
    if (data.image !== '-') {
      src = `http://localhost/static/images/${data.image}`;
      image_url = `<img src=${src} width='300px' height='300px' />`;
    } else {
      image_url='';
    }
    return (
      <div className="detailPage">
        <MonthButton month={month} />
        <DetailName ref={name} name={data.name} />
        <DetailPhoto ref={image} image={src} />
        <DetailDate ref={date} date={data.date} />
        <DetailTag tags={temp} />
        <hr />
        <DetailLetter ref={letter} letter={data.letter}/> 
      </div>
    );
  };
};
const temp = [{cont: '코너'}, {cont: '덕성여자대학교'}, {cont: '컴퓨터공학과'}, {cont: '사랑해요'}]
/*const tmpletter = '코너톤 화이팅~! 이라고만 적었더니 글씨체랑 크기 설정해놓은게 \
잘 안보여서 길게 쓰는 중입니다. 200자 채우려고 열심히 쓰는데 생각보다 길어서 놀랐습니다. \
이럴줄 알았으면 한글 입숨 쓰는건데 벌써 후회가 되지만 지금 122글자입니다. 특수 문자도 써볼까요\
.“ ^^ &*!@#$ 아직 159글자입니다. 편지 받으면 왜 감동받을지 알겠네요. 제대로 만들어보세'*/
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
  const paths = window.location.href.split('/');
  const url = '/' + paths[paths.length - 2] + '/' + paths[paths.length - 1];
  const [data, loading] = useFetch(url);
  const navigate = useNavigate();


  const confirmDelete = () => {
    if (window.confirm('삭제할까요?')) {
      fetch(`/delete?post_code=${data.post_code}`)
        .then(() => { navigate('/jan'); });
    }
  
  }
  
  const privateList = [
    "공개",
    "비공개"
  ]

  const [cnt, setCnt] = useState(0);
  const [priv, setPri] = useState(privateList[cnt]);

  const clickPrivate = () => {
    setCnt((cnt + 1) % 2);
    setPri(privateList[(cnt + 1) % 2]);
  };

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
            src={Bomb}
            alt="삭제하기"
            className="bomb-icon"
            onClick={confirmDelete}
          />
          <div onClick={clickPrivate}>
            {priv === "공개" ? (
              <img 
                src={FullHeart}
                alt="공개로 전환하기"
                className="full-icon"
              />
            ) : priv === "비공개" ? (
              <img 
                src={EmptyHeart}
                alt="비공개로 전환하기"
                className="empty-icon"
              />
            ) : (
              <div />
            )}
          </div>
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