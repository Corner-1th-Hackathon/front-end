import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../css/MonthPage.css";
import PostItem from "../PostItem";
import MoonImage from "../../images/moon.png";
import WriteImage from "../../images/planet.png";

function JanPage() {
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
    getList("/list");
  }, []);

  return (
    <>
      <div>
        <MainButton />
        <div className="monthName">1월</div>
        <WriteButton />
      </div>

      {/* <h2>Post 목록</h2>

      등록된 Post 수: {items.length} */}
      <br />
      <br />
      <div
        className="post-list-style"
        // style={{

        //   display: "grid",
        //   gridTemplateRows: "1fr",
        //   gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        // }}
      >
        {items.map(({ post_code, name, date, image }) => (
          <div className="post-items">
            <PostItem
              post_code={post_code}
              name={name}
              date={date}
              image={image}
              key={post_code}
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

export default JanPage;
