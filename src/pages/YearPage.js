import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/YearPage.css"
import Year23 from "../images/year_2023.png";
import Year24 from "../images/year_2024.png";
import Year25 from "../images/year_2025.png";
import Year26 from "../images/year_2026.png";

const RabbitsPage = () => {
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

      <div className="years-wrapper">
        <div className="year-wrapper">
          <img
            className="year-animal"
            alt="2023년"
            src={Year23}
          />
          <div>2023년</div>
        </div>

        <div className="year-wrapper">
          <img
            className="year-animal"
            alt="2024년"
            src={Year24}
          />
          <div>2024년</div>
        </div>

        <div className="year-wrapper">
          <img
            className="year-animal"
            alt="2025년"
            src={Year25}
          />
          <div>2025년</div>
        </div>

        <div className="year-wrapper">
          <img
            className="year-animal"
            alt="2026년"
            src={Year26}
          />
          <div>2026년</div>
        </div>
      </div>

      <div className="continue">
        To Be Continue!
      </div>
    </div>
  );
};

export default RabbitsPage;
