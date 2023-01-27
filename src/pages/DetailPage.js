import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/DetailPage.css";
import JanImage from "../images/1월.png";
import Bomb from "../images/bomb.png";
import EmptyHeart from "../images/empty-heart.png";
import FullHeart from "../images/full-heart.png";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return [data, loading];
}

// MonthPage에서 month를 받아 버튼을 만듦
function DetailPage({ month }) {
  const paths = window.location.href.split("/");
  const url = "/" + paths[paths.length - 2] + "/" + paths[paths.length - 1];
  const [data, loading] = useFetch(url);
  const name = useRef();
  const date = useRef();
  const letter = useRef();
  const image = useRef();
  const tag = useRef();
  const address = useRef();

  if (loading) {
    return <div>loading</div>;
  } else {
    let src = "";
    let image_url = "";
    console.log("image:" + data.image);
    if (data.image !== "-") {
      src = `http://localhost/static/images/${data.image}`;
      image_url = `<img src=${src} width='300px' height='300px' />`;
    } else {
      image_url = "";
    }
    return (
      <div className="detailPage">
        <MonthButton month={month} />
        <DetailName ref={name} name={data.name} />
        <DetailPhoto ref={image} image={src} />
        <DetailDate ref={date} date={data.date} />
        <DetailTag ref={tag} tag={data.tag} />
        <DetailAddress ref={address} address={data.address} />
        <hr />
        <DetailLetter ref={letter} letter={data.letter} />
      </div>
    );
  }
}

const MonthButton = ({ month }) => {
  return (
    <div className="wrap">
      <span data-tooltip="앨범으로">
        <NavLink to={`/jan`} className="monthButton">
          <img src={JanImage} alt="월별 앨범으로" />
        </NavLink>
      </span>
    </div>
  );
};

// 보내는 사람
const DetailName = ({ name }) => {
  return <div className="detailName">By.{name}</div>;
};

// 사진
const DetailPhoto = ({ image }) => {
  const paths = window.location.href.split("/");
  const url = "/" + paths[paths.length - 2] + "/" + paths[paths.length - 1];
  const [data, loading] = useFetch(url);
  const navigate = useNavigate();

  const confirmDelete = () => {
    if (window.confirm("삭제할까요?")) {
      fetch(`/delete?post_code=${data.post_code}`).then(() => {
        navigate("/jan");
      });
    }
  };

  const privateList = ["공개", "비공개"];

  const [cnt, setCnt] = useState(0);
  const [priv, setPri] = useState(privateList[cnt]);

  const clickPrivate = () => {
    setCnt((cnt + 1) % 2);
    setPri(privateList[(cnt + 1) % 2]);
    alert(privateList[(cnt + 1) % 2] + "로 변경합니다.");
  };

  const username = localStorage.getItem("username");

  return (
    <div>
      <div className="detail-image-wrapper">
        <img src={image} alt="업로드한 사진" className="detailPhoto" />
        <div
          className={username ? "detail-additional" : "detail-additional-un"}
        >
          <img
            src={Bomb}
            alt="삭제하기"
            className="bomb-icon"
            onClick={confirmDelete}
          />
          <div onClick={clickPrivate}>
            {priv === "공개" ? (
              <img
                src={EmptyHeart}
                alt="비공개로 전환하기"
                className="empty-icon"
              />
            ) : priv === "비공개" ? (
              <img
                src={FullHeart}
                alt="공개로 전환하기"
                className="full-icon"
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
  return <div className="detailDate">{date}</div>;
};

// Tag 배열
const DetailTag = ({ tag }) => {
  return <div className="detailTag">{tag}</div>;
};

const DetailAddress = ({ address }) => {
  return <div className="detailAddress">장소:{address}</div>;
};

// 200자 이내의 편지
const DetailLetter = ({ letter }) => {
  return <p className="detailText">{letter}</p>;
};

export default DetailPage;
