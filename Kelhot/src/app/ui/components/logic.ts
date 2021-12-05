export class Logic {
  KELVIN: number = 273.15;

  celsiusToKelvin(value: number) {
    return value + this.KELVIN;
  }

  kelvinToCelsius(value: number) {
    return value - this.KELVIN;
  }
}
