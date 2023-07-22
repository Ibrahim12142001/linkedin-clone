import React from "react";
import "./index.scss"; 
import logo from '../../../assets/logo.png';
import { AiFillHome, AiOutlineUserSwitch, AiOutlineSearch, AiFillMessage, AiFillBell } from 'react-icons/ai';
import { BsBriefcaseFill } from 'react-icons/bs';
import user from '../../../assets/user.png';

export default function Topbar (){ 
return (

    <div className="topbar-main" >
        <img className="logo2" src={logo} alt="logo" />
        <dive className="icons">
        <AiOutlineSearch size={30}  className="icon-small"/>
        <AiFillHome size={30} className="icon-small" />
        <AiOutlineUserSwitch size={30} className="icon-small" />
        <BsBriefcaseFill size={30} className="icon-small" />
        <AiFillMessage size={30} className="icon-small" />
        <AiFillBell size={30} className="icon-small" />
       

        </dive>
        <img className="user" src={user} alt="user" />
    </div>
);
}