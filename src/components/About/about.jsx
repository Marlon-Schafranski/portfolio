import React from "react";
import "./about.css";
import facebook from "../../assets/facebook.png";
import gitHub from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const About = () => {
  return (
    <section id="about">
      <div className="aboutBox">
        <span className="aboutTitle"> Sobre mim </span>
        <span className="aboutDescription">
          Nascido em Prudentópolis no estado do Paraná. Com 21 anos gosto de
          desenvolver aplicações web tanto no Front-End tanto no Back-end.
          atualmente estou no 4° periodo do curso Analise e Desenvolvimento de
          Sistemas na Faculdade UniGuairaca em Guarapuava. Empenhado em me
          tornar um desenvolvedor full stack, concentro meus esforços no
          aprimoramento das habilidades e tecnologias como React Angular e
          Spring. Mesmo fora do ambiente profissional, dedico-me a projetos
          desafiadores, buscando constantemente maneiras de aperfeiçoar meu
          conhecimento e experiência no mundo do desenvolvimento web.
        </span>
      </div>
    </section>
  );
};

export default About;
