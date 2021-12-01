import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['../layout/header.component.css'],
})
export class HeaderComponent {
  about:string = "HexMatiz v1.0 - criado por André Pereira usando Angular, TypeScript, HTML e CSS";
  help:string = "Digite o código de uma cor em hexadecimal e veja a prévia dessa cor. Ex: #fff ou #4d4d56.";

  showAbout(){
    window.alert(this.about);
  }

  showHelp(){
    window.alert(this.help);
  }
}
