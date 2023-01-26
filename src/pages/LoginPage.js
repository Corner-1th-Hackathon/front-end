import React, { useState } from "react";
import Axios from 'axios';
//import { Input } from 'antd';
//import styled from 'styled-components';
import { NavLink, useNavigate } from "react-router-dom";
import Naver from "../images/naver.png"
import MoonImage from '../images/moon.png'
import "../css/Login.css"
import "../css/Tooltip.css"

function LoginPage() {
  //const [userEmail, setUsername] = useState("");
  //const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: email,
      password: password
    }

    Axios.post('/api/v1/shop/auth/login/', user)
      .then(res => {
        if (res.data.key) {
          localStorage.clear()
          localStorage.setItem('token', res.data.key)
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace('/')
        } else {
          setEmail('')
          setPassword('')
          localStorage.clear()
          setErrors(true)
        }
      })
      .catch(err => {
        console.clear()
        alert('아이디 또는 비밀번호가 일치하지 않습니다')
        setEmail('')
        setPassword('')
      })
  }

  return (    
    <div>
      <div className="wrap">
        <span data-tooltip="메인으로">
          <NavLink to={'/'} className='mainButton'>
            <img src={MoonImage} alt='메인으로' />
          </NavLink>              
        </span>
      </div>

      <div className="login-title">로그인</div>
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      <form  onSubmit={onSubmit}>

      
        <div className="write-form">
          <div className="cont-title">e-mail</div>
          <div className="useremail-wrapper">
            <input
              type="email"
              name="userEmail"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="cont-title">Password</div>
          <div className="password-wrapper">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
          <div className="naver-wrapper">
            <button
              className="naver-btn"
            >
              <img
                className="naver-icon"
                alt="네이버"
                src={Naver}
              />
              네이버 계정으로 로그인
            </button>
          </div>
        <div className="buttons">
          <input type='submit'
            className="login-page-btn"
            value='로그인'
          />          
          <button className="join-btn" onClick={() => navigate("/join")}>
            회원가입
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;