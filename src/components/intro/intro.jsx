import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import btnImg from '../../assets/briefcase.png'
import bg  from '../../assets/kappa.png' 

const Intro = () => {
  return (
    <section id='intro'>
         <div className='introContent'>
            <span className='ola'> Olá,</span> 
            <span className='introText'> Eu sou o  <span className='introName'>
                 Marlon Schafranski</span> <br /> Desenvolvedor Web </span>  

            <p className='introParagrafo'>  Uma mistura de conhecimento, porem ainda não profissional <br />
            em React e Angular para o desenvolvimento front-end e Spring <br />
             para o back-end.
            </p>
            <Link><button className='btn'><img src={btnImg} alt='Contrate-me' className='btnImg' ></img> Contrate-me</button></Link>
         
         </div>
         <img src={bg} alt='photo' className='bg' />

    </section>


  )
}

export default Intro