import React, { useState } from "react";
import "./intro.css";
import { Link } from "react-scroll";
import btnImg from "../../assets/briefcase.png";
import bg from "../../assets/zyro-image2.png";
import Hire from "../hire-me/hire";
import { PDFDocument } from "pdf-lib";
import curriculoPDF from "../../assets/curriculo.pdf"


const Intro = () => {
  const downloadPdf = async () => {
    const curriculoBytes = await fetch(curriculoPDF).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.create();
    const curriculoDoc = await PDFDocument.load(curriculoBytes);

    const curriculoPages = await pdfDoc.copyPages(curriculoDoc, [0]);
    pdfDoc.addPage(curriculoPages[0]);

    const pdfBytes = await pdfDoc.save();
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "documento.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
          Eu sou o <span className="introName">
            Marlon Schafranski
          </span> <br /> Desenvolvedor Web{" "}
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
          <div>
            <button className="btn" onClick={downloadPdf}>
              Baixar curriculo
            </button>
          </div>
        </Link>

        {showForm && <Hire onClose={handleCloseForm} />}
      </div>
      <img src={bg} alt="photo" className="bg" />
    </section>
  );
};

export default Intro;
