import React from "react";
import "./skills.css";
import frontReact from "../../assets/front.png";
import frontAngular from "../../assets/angular.png";
import backSpring from "../../assets/spring-3-logo-png-transparent.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skillBars">
        <span className="skillTitle"> Interesses </span>
        <div className="skillBarReact">
          <img src={frontReact} alt="React img" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="titleReact">Desenvolvimento Front-end | React</h2>
            <p>
              React é uma biblioteca JavaScript declarativa e eficiente para
              criar interfaces de usuário interativas permite a construção de
              componentes reutilizáveis que atualizam automaticamente com base
              nos dados alterados, simplificando o desenvolvimento de
              aplicativos web modernos.
            </p>
          </div>
        </div>

        <div className="skillBarAngular">
          <img src={frontAngular} alt="Angular img" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="titleAngular">
              Desenvolvimento Front-End | Angular
            </h2>
            <p>
              Angular é um framework TypeScript para criação de aplicativos web
              escaláveis e dinâmicos. Ele utiliza uma arquitetura baseada em
              componentes, facilitando a construção de interfaces de usuário
              robustas e a integração eficiente com serviços back-end.
            </p>
          </div>
        </div>
        <div className="skillBarSpring">
          <img src={backSpring} alt="Spring img" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="titleSpring">Desenvolvimento Back-End | Spring</h2>
            <p>
              Spring é um poderoso framework para desenvolvimento de aplicativos
              Java, oferecendo ampla modularidade e abordagens flexíveis. Com
              foco em simplicidade e produtividade, o Spring facilita a
              construção de aplicativos empresariais seguros e eficientes,
              abrangendo desde APIs REST até serviços complexos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
