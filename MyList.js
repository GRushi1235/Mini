import React from 'react';
import './MyList.css'
import { Link } from 'react-router-dom';

function Home(){
    return (
      <><div class="container blue circleBehind">
        <Link to="/home">HOME</Link>
        <Link to="">LOGIN</Link>
        <Link to="">REGISTER</Link>
        <Link to="">ABOUT</Link>
        <Link to="">CONTACT US</Link>
      </div>
      <div class="photo">
        <img src='./ev-charging-station-header1920-new.jpg' alt="no img" />
        </div></>
    );
} 

export default Home