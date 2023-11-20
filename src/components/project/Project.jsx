import { useState, useEffect, useRef} from 'react'

import "./project.css";
import { motion } from "framer-motion";
import filme from "../../assets/image/film.png"
import contas from "../../assets/image/conta3.png"
import picPay from "../../assets/image/picpay2.png"
import registro from "../../assets/image/registro.png"
import crud from "../../assets/image/Construcao.png"
import picPayFront from "../../assets/image/picfront.png"

const Project = () => {
  const carousel = useRef();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])


  
                        



  
  const projectData = [
    {
      title: "Aplicativo de filmes",
      image : filme,
      describe: "Aplicatico mobile de filmes desenvolvido em Ionic",
      links: ['https://github.com/Marlon-Schafranski/AppFilme']
      

    },
    {
      title: "Contas a Pagar e Receber",
      image : contas,
      describe:
        "Aplicativo de Contas a pagar e receber desenvolvido em Angular e Firebase",
        links: 'https://github.com/Marlon-Schafranski/Contas-a-pagar-e-receber'
    },
    {
      title: "Pic Pay Simplificado",
      image : picPay,
      describe:
        "Desafio do Pic Pay Simplificado desenvolvido em React Spring",
        links: ['https://github.com/Marlon-Schafranski/Pic-Pay-Simplificado-Back-end']
    },
    {
      title: "Pic Pay Simplificado",
      image : picPayFront,
      describe:
        "Desafio do Pic Pay Simplificado desenvolvido em React Spring",
        links: ['https://github.com/Marlon-Schafranski/pic-pay-simplificado-front-end-main']
    },

    {
      title: "Aplicativo de registro",
      describe: "Essa aplicação mobile foi desenvolvida em Ionic",
      image : registro,
      links: ['https://github.com/Marlon-Schafranski/Resgistro-de-Computadores']
    },
    {
      title: "Projeto full stack CRUD (React e Spring)",
      image : crud,
      describe: "PROJETO EM CONSTRUÇÃO",
      links: ['/']
    },
  ];

  return (
    
      <div className="projectText">
      <div className="projectTextPara">
        <h2 className='projectTitle' >Meus Projetos</h2>
        <span className='projectDesc'> Meus projeto desenvolvidos ate este momento </span>
        <span className='ProjectDesNotice'> *Os projeto sempre estaram sendo atualizado* </span>

      </div>


    <div className="project">
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }} >
        <motion.div className="inner"
        drag="x"
        dragConstraints={{right: 0, left: -width}}
        initial={{x: 100}}
        animate={{x: 0}}
        transition={{ duration: 0.8}}
        >
          {projectData.map((textSlider) => (
            <motion.div className="item" key={textSlider.title}>
              <h2 className='title' >{textSlider.title}</h2>
              <p className='paragrafo' >{textSlider.describe}</p>
              <img src={textSlider.image} alt="" />
              <a href={textSlider.links} className='view' >Vizualizar projeto</a>
            </motion.div>
            
          ))}
          
        </motion.div>
      </motion.div>
      
    </div>
    </div>
  );
};

export default Project;
