import React from "react";
import "./skills.css";
import front from "../../assets/front.png";
import back from "../../assets/spring-3-logo-png-transparent.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> Oque faço </span>
      <span className="skillDescription">
        Empenhado em me tornar um desenvolvedor full stack, concentro meus
        esforços no aprimoramento das habilidades e tecnologias como React e
        Spring. Mesmo fora do ambiente profissional, dedico-me a projetos
        desafiadores, buscando constantemente maneiras de aperfeiçoar meu
        conhecimento e experiência no mundo do desenvolvimento web.
      </span>
      <div className="skillBars">
        <div className="skillBarReact">
          <img src={front} alt="React img" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Desenvolvimento Front-end | React</h2>
            <p>
              
              Eu utilizo o React para o desenvolvimento web, aproveitando
              
              sua eficiência na criação de interfaces dinâmicas e reativas.
              
              A biblioteca proporciona uma experiência de desenvolvimento
            
              mais fluida, permitindo a construção de aplicações modernas
              e responsivas de maneira eficaz.
            </p>
          </div>
        </div>
        <div className="skillBarSpring">
          <img src={back} alt="Spring img" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Desenvolvimento Back-End | Spring</h2>
            <p>
              Para o desenvolvimento backend, adoto o Spring,
              <br />
              uma estrutura robusta e versátil em Java. Com o Spring, <br />
              consigo criar aplicações escaláveis e seguras, além de
              <br />
              facilitar a integração de serviços e a construção de
              <br />
              APIs eficientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
