import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../css/MonthPage.css";
import PostItem from "../PostItem";
import MoonImage from "../../images/moon.png";
import WriteImage from "../../images/planet.png";


function OctPage() {
  const navigate = useNavigate();
  const [items, setPostList] = useState([]);
  const name = useRef();

  function getList(url) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPostList(data);
      });
  }
  useEffect(() => {
    getList("/list10");
  }, []);

  return (
    <>
      <div>
        <MainButton />
        <div className="monthName">10월</div>
        <WriteButton />
      </div>
      <br />
      <br />
      <div className="post-list-style">
        {items.map(({ post_code10, name10, date10, image10 }) => (
          <div className="post-items">
            <PostItem
              post_code={post_code10}
              name={name10}
              date={date10}
              image={image10}
              key={post_code10}
            />
          </div>
        ))}
      </div>
    </>
  );
}

// 각 달에 해당하는 토끼로 메인 페이지 이동
const MainButton = () => {
  return (
    <div className="wrap">
      <span data-tooltip="메인으로">
        <NavLink to={"/"} className="mainButton">
          <img src={MoonImage} alt="메인으로" />
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
        <NavLink to={"/write"} className="wirteButton">
          <img className="write-btn" src={WriteImage} alt="글작성" />
        </NavLink>
      </span>
    </div>
  );
};

export default OctPage;
