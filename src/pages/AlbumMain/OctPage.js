import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import OctImage from '../../images/oct.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={OctImage}/>
    </NavLink>
  );
};

function OctPage() {
  return (
    <MonthButton />
  );
}

export default OctPage;
