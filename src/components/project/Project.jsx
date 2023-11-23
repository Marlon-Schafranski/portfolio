import "./swiper.css";
import { useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade'
register();

const Project = () => {
  const [slidePerView, setSlidePerView] = useState(2)
  const swiperData = [
    {
      title: "Aplicativo de filmes",

      describe: "Aplicativo de filmes utilizando API desenvolvido em Ionic.",
      links: ["https://github.com/Marlon-Schafranski/AppFilme"],
    },
    {
      title: "Bills-to-Pay",

      describe:
        "Aplicativo intuitivo de pagar e receber. Desenvolvido em Angular e Firebase.",
      links: "https://github.com/Marlon-Schafranski/Contas-a-pagar-e-receber",
    },
    {
      title: "Pic Pay Simplificado (Back-End)",

      describe:
        "Primeira parte do projeto do Desafio do Pic Pay Simplificado (Back-End)  , desenvolvido em Spring e o Insomnia para disparações das API's. ",
      links: [
        "https://github.com/Marlon-Schafranski/Pic-Pay-Simplificado-Back-end",
      ],
    },
    {
      title: "Pic Pay Simplificado (Front-End), ",

      describe:
        "Segunda parte do Desafio do Pic Pay Simplificado, desenvolvido em React *ainda em construção*",
      
      links: [
        "https://github.com/Marlon-Schafranski/pic-pay-simplificado-front-end-main",
      ],
    },

    {
      title: "Projeto full stack CRUD (React e Spring)",

      describe:
        "PROJETO EM CONSTRUÇÃO  (aguarde pegue um café, o projeto logo estará dispovivel!!! )",
      links: ["/"],
    },
  ];

  useEffect(() =>  {
    function handleResize(){
      if (window.innerWidth < 720) {
        setSlidePerView(1)
      }else{
        setSlidePerView(2)
      }
    }  
    
    handleResize()

    window.addEventListener('resize',handleResize)


    return() => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return (
    <div id="project">
    <div className="projectText">
      <div className="projectTextPara">
        <h2 className="projectTitle">Meus Projetos</h2>
        <span className="projectDesc">
          {" "}
          Meus projeto desenvolvidos ate este momento{" "}
        </span>
        <span className="ProjectDesNotice">
          {" "}
          *Os projeto sempre estaram sendo atualizado*{" "}
        </span>
      </div>

      <Swiper
        slidesPerView={slidePerView}
        pagination={{ clickable: true}}
        navigation
        className="swiper"
        >


    
          {swiperData.map((item) => (
            <SwiperSlide key={item.id} className="slide-item" >
            
              <h2 >{item.title}</h2>
              <p >{item.describe}</p>
              <a  href={item.links}>Acesse o projeto no GitHub</a>

            </SwiperSlide>
          ))}
       
      </Swiper>
    </div>
    </div>
  );
};

export default Project;
