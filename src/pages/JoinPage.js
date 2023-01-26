import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MoonImage from '../images/moon.png'
import "../css/Join.css"
import "../css/Tooltip.css"

function Join() {      
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [passWord, setPass] = useState("");
  const [ConfirmPass, setConfirm] = useState("");
  const navigate = useNavigate();
  
  return (    
    <div> 
      <div className="wrap">
        <span data-tooltip="메인으로">
          <NavLink to={'/'} className='mainButton'>
            <img src={MoonImage} alt='메인으로' />
          </NavLink>              
        </span>
      </div>

      <div className="login-title">회원가입</div>
      <div className="write-form">
        <div className="cont-title">UserName</div>
        <div className="username-wrapper">
          <input
            type="text"
            name="userName"
            value={userName}
            id="user-name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="cont-title">e-mail</div>
        <div className="useremail-wrapper">
          <input
            type="text"
            name="userEmail"
            value={userEmail}
            id="user-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="cont-title">Password</div>
        <div className="password-wrapper">
          <input
            type="password"
            name="password"
            id="password"
            value={passWord}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="cont-title">Confirm Password</div>
        <div className="confirm-wrapper">
          <input
            type="password"
            name="confirm"
            id="confirm-password"
            value={ConfirmPass}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
      </div>
      <div className="join-button">
        <button className="join-page-btn" onClick={() => navigate("/join")}>
          회원가입
        </button>
      </div>
    </div>
  )
} 

export default Join;

