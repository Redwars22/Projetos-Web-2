import { Component } from '@angular/core';

@Component({
  selector: 'main',
  template: `
    <div class="main">
      <h5>Informe a latitude e a longitude de um lugar e descubra onde fica!</h5>
      <div class="container">
        <div class="components">
          <div class="el">
            <h6>🗺️ Latitude:</h6>
            <input type="text" id="lat"/>
          </div>
          <div class="el">
            <h6>🗺️ Longitude:</h6>
            <input type="text" id="long"/>
          </div>
        </div>
        <div class="btn">
          <button (click)="showMap()">📌 LOCALIZAR</button>
        </div>
      </div>
      <div class="map" id="map"></div>
    </div>
    <footer>
      <p><strong>FindWhere</strong>, criado por André Pereira usando a API do GoogleMaps e o framework Angular</p>
      <img src=""/>
    </footer>
  `,
  styleUrls: ['../style/main.component.css', '../style/responsive.css'],
})
export class MainComponent {
  getLatitude() {
    let latitude = (<HTMLInputElement>document.getElementById('lat')).value;
    return latitude;
  }

  getLongitude() {
    let longitude = (<HTMLInputElement>document.getElementById('long')).value;
    return longitude;
  }

  showMap() {
    let lat: string = this.getLatitude();
    let long: string = this.getLongitude();

    document.getElementById('map').innerHTML =
      '<iframe class="mapShow" src="https://www.google.com/maps/embed/v1/view?key=$API_KEY&center=' +
      lat +
      ',' +
      long +
      '&maptype=satellite&zoom=15" width="333" height="233" frameborder="0" style="border:0"/>';
  }
}
