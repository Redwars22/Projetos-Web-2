import { Component } from '@angular/core';
import { Logic } from './logic';

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: ['../layout/converter.component.css'],
})
export class ConverterComponent {
  celsiusToKelvin() {
    let logic = new Logic();
    let value: number = parseFloat(
      (<HTMLInputElement>document.getElementById('temperature')).value
    );
    let kelvin: any = logic.celsiusToKelvin(value);
    document.getElementById('identifierText').innerText =
      'TEMPERATURA EM KELVIN:';
    document.getElementById('temperatureText').innerText =
      kelvin.toString() + ' K';
  }

  kelvinToCelsius() {
    let logic = new Logic();
    let value: number = parseFloat(
      (<HTMLInputElement>document.getElementById('temperature')).value
    );
    let celsius: any = logic.kelvinToCelsius(value);
    document.getElementById('identifierText').innerText =
      'TEMPERATURA EM CELSIUS:';
    document.getElementById('temperatureText').innerText =
      celsius.toString() + ' ºC';
  }
}
