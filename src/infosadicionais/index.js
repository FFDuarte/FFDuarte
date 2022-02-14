import './carroussel.css'


import React from 'react';
import {Button } from 'reactstrap';

const InfoAdicionais = (props) => {
  return (
    <div className="main">
      <div className='body'>
        <div className='infos'>
            <h1 className="display-3">Fabricio Fernando</h1>
            <p >Neste site sera encontrado informações para contato, projetos realizados, conhecimentos.</p>
            <hr className="hr" />
            <p>Este site foi projetado pra servir como portifolio e apresentar um pouco sobre  min e minha carreira como dev </p>
            <hr className="hr" />
            <p> Abaixo voce encontrara diversas informações, mas fique por dentro acessando algumas de minhas informações como o github e linkdin</p>
            <div>
              <Button  className='button' type='a' href="https://www.linkedin.com/in/fabricio-fernando-136321125/" target="_blank">Linkdin</Button>  
              <Button  className='button'  type='a' href="https://github.com/FFDuarte" target="_blank">Github</Button> 
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default InfoAdicionais;


  