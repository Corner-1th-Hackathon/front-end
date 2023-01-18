import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import JanImage from '../../images/jan.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={JanImage}/>
    </NavLink>
  );
};

function JanPage() {  
  return (
    <div>
      <MonthButton />
    </div>
  );
}

export default JanPage;