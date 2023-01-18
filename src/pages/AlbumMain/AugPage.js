import React from "react";
import { NavLink } from "react-router-dom";
import './MonthPage.css';
import AugImage from '../../images/aug.png';

const MonthButton = () => {
  return (
    <NavLink to={'/'} className='monthButton'>
      <img src={AugImage}/>
    </NavLink>
  );
};

function AugPage() {
  return (
    <MonthButton />
  );
}

export default AugPage;
