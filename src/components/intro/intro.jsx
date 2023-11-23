import React, { useState } from "react";
import "./intro.css";
import { Link } from "react-scroll";
import btnImg from "../../assets/briefcase.png";
import bg from "../../assets/kappa.png";
import Hire from "../hire-me/hire"; // Importe o componente do formulário

const Intro = () => {
  const [showForm, setShowForm] = useState(false);

  const handleContactClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="ola"> Olá,</span>
        <span className="introText">
          {" "}
          Eu sou o <span className="introName">Marlon Schafranski</span>{" "}
          <br /> Desenvolvedor Web{" "}
        </span>
        <p className="introParagrafo">
          {" "}
          Uma mistura de conhecimento, porém ainda não profissional <br />
          em React e Angular para o desenvolvimento front-end e Spring <br />
          para o back-end.
        </p>
        <Link>
          <button className="btn" onClick={handleContactClick}>
            <img src={btnImg} alt="Contrate-me" className="btnImg"></img>{" "}
            Contrate-me
          </button>
        </Link>
        {/* Mostra o formulário se showForm for verdadeiro */}
        {showForm && <Hire onClose={handleCloseForm} />}
      </div>
      <img src={bg} alt="photo" className="bg" />
    </section>
  );
};

export default Intro;
