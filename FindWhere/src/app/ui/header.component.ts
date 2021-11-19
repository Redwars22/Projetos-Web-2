import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header">
      <img src="https://raw.githubusercontent.com/Redwars22/Web2/main/findwhere.png"/>
      <div class="buttons">
        <a href="https://github.com/Redwars22/Web2/blob/main/FindWhere/README.md">Sobre</a>
        <a href="https://github.com/Redwars22/Web2/blob/main/FindWhere/README.md">Ajuda</a>
        <a href="https://developers.google.com/maps/documentation/urls/get-started?hl=pt-br">API</a>
        <a href="https://github.com/Redwars22/">Outros Apps</a>
        <a href="https://redwars22.github.io/Portfolio/">O Autor</a>
      </div>
    </div>
  `,
  styleUrls: ['../style/header.component.css'],
})
export class HeaderComponent {}
