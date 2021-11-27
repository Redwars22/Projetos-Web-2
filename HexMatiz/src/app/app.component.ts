import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colorPreview() {
    let color: string = '#9587cd';
    document.write(
      '<style>div{ background-color: ' +
        color +
        '; width: 100px; height: 100px; }</style>' +
        '<div></div>'
    );
  }
}
