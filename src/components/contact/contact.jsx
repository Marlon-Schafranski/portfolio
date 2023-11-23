import React, { useState } from "react";
import './contact.css';

import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import gitHub from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';

import ScrollToTop from "react-scroll-to-top";

import emailjs from '@emailjs/browser'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos")
      return;
    }
   
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_rhcga95", "template_vcge3ob", templateParams, "S_WEDx40RrIGgdSKn" )
    .then(( response ) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')

    }, (err) => {
      console.log("ERRO: ", err)
    })
    
  }

  const socialMediaData = [
    {
      platform: 'Facebook',
      image: facebook,
      link: 'https://www.facebook.com/profile.php?id=100082685932561',
    },
    {
      platform: 'Instagram',
      image: instagram,
      link: 'https://www.instagram.com/marlon.schafranski_',
    },
    {
      platform: 'LinkedIn',
      image: linkedin,
      link: 'https://www.linkedin.com/in/marlon-schafranski-b48882282/',
    },
    {
      platform: 'WhatsApp',
      image: whatsapp,
      link: 'https://wa.me/42999560547',
    },
    {
      platform: 'GitHub',
      image: gitHub,
      link: 'https://github.com/Marlon-Schafranski',
    },
  ];

  return (
    <div id="contact">
      <ScrollToTop smooth top='20' />
      <div className="container">
        <h1 className="title">Contato</h1>

        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Digite o seu nome..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="input"
            type="text"
            placeholder="Digite o seu email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="textarea"
            placeholder="Digite a sua menssagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Enviar" />
        </form>
     

      <div className="social-media-container">
        {socialMediaData.map((data, index) => (
          <div className="social-media" key={index}>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <img className="social-media-icon" src={data.image} alt={`${data.platform} icon`} />
            </a>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Contact;
