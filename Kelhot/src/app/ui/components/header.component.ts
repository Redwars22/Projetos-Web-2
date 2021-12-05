import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../layout/header.component.css'],
})
export class HeaderComponent {
  about() {
    window.alert(
      'ProjectKelhot - Conversor de temperatura (Celcius <-> Kelvin)' +
        '. Desenvolvido por André Pereira com Angular, TypeScript, HTML e CSS' +
        '. Versão 1.0.1'
    );
  }

  help() {
    window.alert(
      'Digite a temperatura (em Celsius ou Kelvin, sem o símbolo K ou ºC) e em seguida aperte o botão correspondente à conversão que deseja fazer.'
    );
  }
}
