import React from "react";
import "./navbar.css";
import logo from '../../assets/logo2.png';  
import {Link} from 'react-scroll'
import contactImg from '../../assets/conversation.png'
export const Navbar = () => {
  return (
    <nav className="navbar">

      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <b>
        <Link className="desktopMenuListItem" > Ínicio </Link>
        <Link className="desktopMenuListItem" > Sobre mim </Link>
        <Link className="desktopMenuListItem" > Conhecimentos </Link>
        <Link className="desktopMenuListItem" > Projetos </Link>        
        </b>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contato
      </button>
    </nav>
  );
};

export default Navbar;