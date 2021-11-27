import { Component } from '@angular/core';

@Component({
  selector: 'color',
  templateUrl: 'colorPreview.component.html',
  styleUrls: ['../layout/colorPreview.component.css'],
})
export class ColorComponent {
  previewColor() {
    let color = (<HTMLInputElement>document.getElementById('hexCode')).value;
    window.alert(color);
    let parameters =
      '<style>.color { background-color: ' +
      color +
      '; width: 150px; height: 150px; border-radius: 10px; margin-left: 10px;}</style>';
    let code = parameters + "<div class='color'></div>";
    document.getElementById('colorPreview').innerHTML = code;
  }
}
