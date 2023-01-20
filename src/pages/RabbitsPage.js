import React from "react";
import "../css/RabbitsPage.css";
import "../css/CalendarPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import jan from "../images/1월.png";
import feb from "../images/2월.png";
import mar from "../images/3월.png";
import apr from "../images/4월.png";
import may from "../images/5월.png";
import jun from "../images/6월.png";
import jul from "../images/7월.png";
import aug from "../images/8월.png";
import sep from "../images/9월.png";
import oct from "../images/10월.png";
import nov from "../images/11월.png";
import dec from "../images/12월.png";

const RabbitsPage = () => {
  const monthList = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const rabbitList = [
    jan,
    feb,
    mar,
    apr,
    may,
    jun,
    jul,
    aug,
    sep,
    oct,
    nov,
    dec,
  ];
  const navigate = useNavigate();

  const handleCopyClipBoard = async (str) => {
    try {
      await navigator.clipboard.writeText(str);
      alert("링크 복사 성공!");
    } catch (e) {
      alert("..링크 복사 실패");
    }
  };

  return (
    <div className="rabbits">
      <div className="nav">
        <div className="user-name">계정 주인</div>
        <div className="btn-wrapper">
          <button
            className="link-btn"
            onClick={() => handleCopyClipBoard("http://localhost:3000/")}
          >
            Link
          </button>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>

      <div className="rabbits-wrapper">
        {monthList.map((value, index) => (
          <NavLink to={`/${value}`} key={index}>
            <img
              className="month-rabbit-img"
              alt="토끼"
              src={rabbitList[index]}
              width="243px"
              height="223px"
            ></img>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default RabbitsPage;
