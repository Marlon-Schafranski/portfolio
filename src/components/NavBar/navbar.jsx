import React, { useState } from "react";
import "./navbar.css";
import logo from '../../assets/logo.png'; 
import logo2 from '../../assets/novaLogo.png'; 
import { Link } from 'react-scroll';
import contactImg from '../../assets/conversation.png';
import menuMob from '../../assets/menumob.png'
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)


  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <img src={logo2} alt="Logo" className="logoMob"/>
      <div className="desktopMenu">
        <div className="desktopMenuList">
          <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Início</Link>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Sobre mim</Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Interesses</Link>
          <Link activeClass="active" to="know" spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuListItem">Conhecimentos</Link>

          <Link activeClass="active" to="project" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projetos</Link>
        </div>
      </div>
       <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: "smooth"})
      }} >
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contato
      </button>
     
      <img src={menuMob} alt="Logo" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}} >
          <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Início</Link>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Sobre mim</Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Interesses</Link>
          <Link activeClass="active" to="know" spy={true} smooth={true} offset={-30} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Conhecimentos</Link>
          <Link activeClass="active" to="project" spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Projetos</Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Contato</Link>
        </div>
    </nav>
  );
};

export default Navbar;
