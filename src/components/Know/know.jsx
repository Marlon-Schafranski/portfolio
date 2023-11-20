import "./know.css";
import html from "../../assets/174854.png";
import css from "../../assets/logo-css-3-2048.png";
import js from "../../assets/logo-javascript-1024.png";
import ts from "../../assets/Typescript_logo_2020.svg.png";
import tailwind from "../../assets/tailwind-css-logo-5AD4175897-seeklogo.com.png";
import react from "../../assets/front.png";
import angular from "../../assets/angular.png";
import java from "../../assets/JAVA.png";
import spring from "../../assets/spring-3-logo-png-transparent.png";

const Know = () => {
  const knowledgeData = [
    {
      title: "Html",
      image: html,
      description:
        "HTML (HyperText Markup Language) é a linguagem de marcação fundamental para a criação de páginas web, estruturando o conteúdo por meio de tags que definem elementos como títulos, parágrafos e links.",
    },
  
    {
      title: "Css",
      image: css,
      description:
        "CSS (Cascading Style Sheets) é uma linguagem de marcação de estilos para a criação de páginas web, estruturando o conteúdo por meio de tags que definem elementos como títulos, parágrafos e links.",
    },
    {
      title: "Javascript",
      image: js,
      description:
        "Javascript é uma linguagem de programação orientada a objetos, que é uma das linguagens mais utilizadas no mundo atual.",
    },

    {
      title: "Typescript",
      image: ts,
      description:
        "TypeScript (TS) é uma extensão de JavaScript que adiciona tipagem estática opcional, oferecendo assim um desenvolvimento mais robusto e escalável, facilitando a detecção de erros durante a fase de desenvolvimento",
    },

    {
      title: "Tailwind",
      image: tailwind,
      description:
        "Tailwind CSS é uma linguagem de estilos para a criação de páginas web, estruturando o conteúdo por meio de tags que definem elementos como títulos, parágrafos e links.",
    },

    {
      title: "React",
      image: react,
      description:
        "React é uma linguagem de programação orientada a objetos, que é uma das linguagens mais utilizadas no mundo atual.",
    },

    {
      title: "Angular",
      image: angular,
      description:"O Angular é um poderoso framework JavaScript utilizado para desenvolvimento de aplicações web dinâmicas. Com sua arquitetura baseada em componentes, facilita a criação de interfaces interativas e responsivas, proporcionando uma experiência de usuário moderna e eficiente."

    },

    {
      title: "java",
      image: java,
      description:
        "Java é uma linguagem de programação versátil e orientada a objetos, conhecida por sua portabilidade em desenvolvimento de software. É utilizado em varias aplicações, desde aplicativos móveis até sistemas empresariais complexos.",
    },

    {
      title: "Spring",
      image: spring,
      description:
        "Spring é um framework de desenvolvimento de aplicativos Java que oferece uma ampla gama de recursos para simplificar o desenvolvimento, promover boas práticas de programação e aumentar a produtividade.",
    },
  ];

  return (
    <section id="know">
      <h2 className="knowTitle">Conhecimentos</h2>
      <span className="knowDesc">
        Passe o mouse para poder ler
      </span>

      <div className="knowCard">
        {knowledgeData.map((knowledge, index) => (
          <div className="card" key={index}>
            <div className="img-box">
              <img src={knowledge.image} alt={knowledge.title} />
            </div>

            <div className="content">
              <h2>{knowledge.title}</h2>
              <p>{knowledge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Know;
