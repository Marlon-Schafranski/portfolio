// hire.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './hire.css';

const Hire = ({ onClose }) => {
  const [nome, setNome] = useState("");
  const [emailContato, setEmailContato] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarEmail = (e) => {
    e.preventDefault();
    
    if (nome === '' || emailContato === '' || mensagem === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: emailContato,
    };

    emailjs.send("service_rhcga95", "template_vcge3ob", templateParams, "S_WEDx40RrIGgdSKn")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setNome('');
        setEmailContato('');
        setMensagem('');
        onClose(); // Fechar o formulário após o envio bem-sucedido
      })
      .catch((err) => {
        console.log("ERRO: ", err);
      });
  };

  return (
    <div id="hire">
      <div className={`containerHire`}>
        <h1 className="titleHire">Contato</h1>
        <form className="formHire" onSubmit={enviarEmail}>
          <input
            className="inputHire"
            type="text"
            placeholder="Digite o seu nome..."
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
          <input
            className="inputHire"
            type="text"
            placeholder="Digite o seu email..."
            onChange={(e) => setEmailContato(e.target.value)}
            value={emailContato}
          />
          <textarea
            className="textareaHire"
            placeholder="Digite a sua mensagem..."
            onChange={(e) => setMensagem(e.target.value)}
            value={mensagem}
          />
          <input className="buttonHire" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default Hire;
