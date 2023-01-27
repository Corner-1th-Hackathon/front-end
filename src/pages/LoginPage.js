import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import MoonImage from "../images/moon.png";
import "../css/Login.css";
import "../css/Tooltip.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios
      .post("/api/v1/shop/auth/login/", user)
      .then((res) => {
        console.log(res.data);
        if (res.data.key) {
          console.log(res.data);
          // localStorage.clear();
          localStorage.removeItem("token");
          localStorage.removeItem("isAuthorized");
          localStorage.setItem("token", res.data.key);
          localStorage.setItem("isAuthorized", true);

          navigate("/");
        } else {
          setEmail("");
          setPassword("");
          localStorage.clear();
          setErrors(true);
        }
      })
      .catch((err) => {
        console.clear();
        console.log(err.response.data);
        alert("아이디 또는 비밀번호가 일치하지 않습니다");
        setEmail("");
        setPassword("");
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

      <div className="login-wrapper">
        <div className="login-title">로그인</div>
        {errors === true && <h2>Cannot signup with provided credentials</h2>}
        <form onSubmit={onSubmit} className="loginForm">
          <div className="login-write-form">
            <div className="cont-title">e-mail</div>
            <input
              type="email"
              name="email"
              value={email}
              id="user-email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="cont-title">Password</div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-page-btn" type="submit">
            로그인
          </button>
        </form>
        <div className="join-btn-wrap">
          <button className="join-btn" onClick={() => navigate("/join")}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
