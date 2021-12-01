import { Component } from '@angular/core';

@Component({
  selector: 'color',
  templateUrl: 'colorPreview.component.html',
  styleUrls: ['../layout/colorPreview.component.css'],
})
export class ColorComponent {
  previewColor() {
    let color:string = (<HTMLInputElement>document.getElementById('hexCode')).value;
    let parameters:string =
      '<style>.color { background-color: ' +
      color +
      '; width: 150px; height: 150px; border-radius: 10px; margin-left: 10px;}</style>';
    let code:string = parameters + "<div class='color'></div>";
    document.getElementById('colorPreview').innerHTML = code;
  }
}