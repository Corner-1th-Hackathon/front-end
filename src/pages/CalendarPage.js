import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import {Menu } from 'antd';
import Axios from 'axios';
import "../css/CalendarPage.css";
import moon from "../images/moon.png";
import leftArrow from "../images/left_arrow.png";
import rightArrow from "../images/right_arrow.png";
import blackRabbit from "../images/black_rabbit.png";
import map from "../images/map.png";
import year from "../images/year.png";

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

const CalendarPage = () => {
  const monthList = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const [count, setCount] = useState(0);
  const [month, setMonth] = useState(monthList[count]); //1월
  const [auth, setAuth] = useState('');

  useEffect(()=>{
    if(localStorage.getItem('token') !== null ){
      setAuth(true);
    }
  }, [])

  const handleLogout = () => {
    let token = localStorage.getItem('token')

    Axios.post('/api/v1/shop/auth/logout/', token)
      .then(res => {
        localStorage.clear()
        // 사용하려면 App.js에서 /로 라우팅해야 한다
        window.location.replace('/')
      });
  }

  const clickLeft = () => {
    // if (count === 1) {

    // } else {
    //   setCount(Math.abs(count - 1) % 12);
    //   console.log("count", count);
    //   setMonth(monthList[count - 2]);
    // }
    if (month === "1월") {
      setMonth(monthList[12 - Math.abs(count - (1 % 11))]); //3
      setCount(11);
    } else {
      setCount(Math.abs(count - (1 % 11)));
      setMonth(monthList[(count - 1) % 12]); //3
    }
  };

  const clickRight = () => {
    setCount((count + 1) % 12);
    // console.log("count", count);
    setMonth(monthList[(count + 1) % 12]); //0 1 2 3 .. 11
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: `https://beabook-server.herokuapp.com/api/bookstore/getMapMarker`,
  //   }).then((response) => {
  //     if (response.data.success) {
  //       setMarker(response.data.bookstore);
  //     } else {
  //       console.log("불러오기 실패");
  //     }
  //   });
  // }, []);

  const handleCopyClipBoard = async (str) => {
    try {
      await navigator.clipboard.writeText(str);
      alert("링크 복사 성공!");
    } catch (e) {
      alert("..링크 복사 실패");
    }
  };

  return (
    <div className="calendar">
      <div className="nav">
        <div className="user-name">계정 주인</div>
        <div className="btn-wrapper">
          <button
            className="link-btn"
            onClick={() => handleCopyClipBoard("http://localhost:3000/")}
          >
            Link
          </button>
          <Menu>
          { auth ?
            <Menu.Item key="logout" onClick={handleLogout} className="link-btn">
              로그아웃
            </Menu.Item>
            :
            <Menu.Item key="signin" className="login-btn">
              <Link to="/login">
              로그인
              </Link>
            </Menu.Item>
          }
        </Menu>
        </div>
      </div>

      <div className="image-wrapper">
        <img className="moon-img" alt="달" src={moon}></img>
        {month === "1월" ? (
          <NavLink to="/jan" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={jan}></img>
            </div>
          </NavLink>
        ) : month === "2월" ? (
          <NavLink to="/feb" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={feb}></img>
            </div>
          </NavLink>
        ) : month === "3월" ? (
          <NavLink to="/mar" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={mar}></img>
            </div>
          </NavLink>
        ) : month === "4월" ? (
          <NavLink to="/apr" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={apr}></img>
            </div>
          </NavLink>
        ) : month === "5월" ? (
          <NavLink to="/may" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={may}></img>
            </div>
          </NavLink>
        ) : month === "6월" ? (
          <NavLink to="/jun" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={jun}></img>
            </div>
          </NavLink>
        ) : month === "7월" ? (
          <NavLink to="/jul" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={jul}></img>
            </div>
          </NavLink>
        ) : month === "8월" ? (
          <NavLink to="/aug" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={aug}></img>
            </div>
          </NavLink>
        ) : month === "9월" ? (
          <NavLink to="/sep" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={sep}></img>
            </div>
          </NavLink>
        ) : month === "10월" ? (
          <NavLink to="/oct" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={oct}></img>
            </div>
          </NavLink>
        ) : month === "11월" ? (
          <NavLink to="/nov" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={nov}></img>
            </div>
          </NavLink>
        ) : month === "12월" ? (
          <NavLink to="/dec" className="nav-link">
            <div className="rabbit-img-wrapper">
              <img className="rabbit-img" alt="토끼" src={dec}></img>
            </div>
          </NavLink>
        ) : (
          <div />
        )}
      </div>

      {/* <div className="calendar-bottom-wrapper"> */}
      <div className="arrow-wrapper">
        <img
          className="left-arrow"
          alt="왼쪽 화살표"
          src={leftArrow}
          onClick={() => clickLeft()}
        ></img>
        <div className="month-number">{month}</div>
        <img
          className="right-arrow"
          alt="오른쪽 화살표"
          src={rightArrow}
          onClick={() => clickRight()}
        ></img>
      </div>

      <div className="option-btn">
        <img
          className="calendar-btn"
          alt="연간 버튼"
          src={year}
          onClick={() => navigate("/years")}
        ></img>
        <img
          className="map-btn"
          alt="지도 버튼"
          src={map}
          onClick={() => navigate("/map")}
        ></img>
      </div>

      <div className="rabbit-btn">
        <img
          className="black-rabbit"
          alt="깜장토끼"
          src={blackRabbit}
          onClick={() => navigate("/rabbits")}
        />
        <div
          className="all-rabbit-content"
          onClick={() => navigate("/rabbits")}
        >
          전체 토끼 보기
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;