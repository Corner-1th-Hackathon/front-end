import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/YearPage.css";
import Year23 from "../images/year_2023.png";
import Year24 from "../images/year_2024.png";
import Year25 from "../images/year_2025.png";
import Year26 from "../images/year_2026.png";

const YearPage = () => {
  const navigate = useNavigate();

  const handleCopyClipBoard = async (str) => {
    try {
      await navigator.clipboard.writeText(str);
      alert("링크 복사 성공!");
    } catch (e) {
      alert("..링크 복사 실패");
    }
  };

  const isAuthorized = localStorage.getItem("isAuthorized");
  const username = localStorage.getItem("username");

  const onClick = () => {
    let token = localStorage.getItem("token");

    axios
      .post("/api/v1/shop/auth/logout/", token)
      .then((res) => {
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.clear();
        console.log(err.response.data);
        alert("로그아웃 실패");
      });
  };

  return (
    <div className="years">
      <div className="nav">
        <div className="user-name">{username === "" ? " " : username}</div>
        <div className="btn-wrapper">
          <button
            className="link-btn"
            onClick={() => handleCopyClipBoard("http://localhost:3000/")}
          >
            Link
          </button>
          {!isAuthorized ? (
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          ) : (
            <button className="login-btn" onClick={onClick}>
              Logout
            </button>
          )}
        </div>
      </div>

      <div className="years-wrapper">
        <div className="year-wrapper" onClick={() => navigate("/")}>
          <img className="year-2023" alt="2023년" src={Year23} />
          <div>2023년</div>
        </div>

        <div className="year-wrapper">
          <img className="year-2024" alt="2024년" src={Year24} />
          <div>2024년</div>
        </div>

        <div className="year-wrapper">
          <div className="bg-croop">
            <img className="year-2025" alt="2025년" src={Year25} />
          </div>
          <div>2025년</div>
        </div>

        <div className="year-wrapper">
          <img className="year-2026" alt="2026년" src={Year26} />
          <div>2026년</div>
        </div>
      </div>

      <div className="continue">To Be Continue!</div>
    </div>
  );
};

export default YearPage;
