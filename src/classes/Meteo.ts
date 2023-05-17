export enum TemperatureUnity {
  CELSIUS = "CELSIUS",
  FAHRENHEIT = "FAHRENHEIT",
  KELVIN = "KELVIN",
  RANKINE = "RANKINE",
}

import MeteoException from "./MeteoException";

class Meteo {
  unityValue(unity: TemperatureUnity): number {
    let value: number;

    switch (unity) {
      case TemperatureUnity.CELSIUS:
        value = 1;
        break;
      case TemperatureUnity.FAHRENHEIT:
        value = 33.8;
        break;
      case TemperatureUnity.KELVIN:
        value = 274.1;
        break;
      case TemperatureUnity.RANKINE:
        value = 493.47;
        break;
      default:
        value = 1;
    }

    return value;
  }

  temperature(
    city: string,
    unity: TemperatureUnity = TemperatureUnity.CELSIUS
  ): number {
    if (!city.length) {
      throw new MeteoException("City must be filled");
    }

    let value: number = 13;

    return value * this.unityValue(unity);
  }
}

export default Meteo;
