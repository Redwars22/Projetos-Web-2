import React from 'react';
import './navbar.style.css';

export default function NavBarComponent() {
  function about() {
    window.alert(
      'Project Redemption. Versão 1.0.0 UPDATE 1. Criado por André Pereira usando HTML, CSS, JavaScript e Materialize.'
    );
  }

  function help() {
    window.alert('A ajuda estará disponível na versão final!');
  }

  return (
    <div className="menu">
      <a href="https://github.com/Redwars22" className="menu-item">
        MAIS PROJETOS
      </a>
      <a
        href="https://redwars22.github.io/Website/index.html"
        className="menu-item"
      >
        MEU WEBSITE
      </a>
      <a onClick={about} className="menu-item">
        SOBRE
      </a>
      <a onClick={help} className="menu-item">
        AJUDA
      </a>
    </div>
  );
}
