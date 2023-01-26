import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import MoonImage from "../images/moon.png";
import "../css/Join.css";
import "../css/Tooltip.css";

function Join() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    };

    // 유효성 검사
    if (password1 !== password2) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
      return false;
    }

    axios
      .post("/api/v1/shop/auth/register/", user)
      .then((res) => {
        if (res.data.key) {
          console.log(user.username);
          localStorage.clear();
          localStorage.setItem("token", res.data.key);
          localStorage.setItem("username", user.username);

          navigate("/login");
        } else {
          setUsername("");
          setEmail("");
          setPassword1("");
          setPassword2("");
          localStorage.clear();
          setErrors(true);
        }
      })
      .catch((err) => {
        console.clear();
        console.log(err.response.data);
        alert("아이디 혹은 비밀번호가 일치하지 않습니다");
      });
  };

  return (
    <div>
      <div className="wrap">
        <span data-tooltip="메인으로">
          <NavLink to={"/"} className="mainButton">
            <img src={MoonImage} alt="메인으로" />
          </NavLink>
        </span>
      </div>

      <div className="sign-wrapper">
        <div className="login-title">회원가입</div>
        {errors === true && <h2>Cannot signup with provided credentials</h2>}
        <div className="join-write-form">
          <form onSubmit={onSubmit} className="accountForm">
            <div className="cont-title">UserName</div>
            <input
              type="text"
              name="userName"
              value={username}
              id="user-name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="cont-title">e-mail</div>
            <input
              type="email"
              name="userEmail"
              value={email}
              id="user-email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="cont-title">Password</div>
            <input
              type="password"
              name="password1"
              id="password"
              placeholder="8자 이상"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <div className="cont-title">Confirm Password</div>
            <input
              type="password"
              name="password2"
              id="confirm-password"
              placeholder="비밀번호 확인"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <div className="join-button">
              <button className="join-page-btn" type="submit">
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Join;
