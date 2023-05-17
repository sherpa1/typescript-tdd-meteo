export enum TemperatureMeasureUnity {
  CELSIUS = "CELSIUS",
  FAHRENHEIT = "FAHRENHEIT",
  KELVIN = "KELVIN",
  RANKINE = "RANKINE",
}

import MeteoException from "./MeteoException";

class Meteo {
  unityValue(unity: TemperatureMeasureUnity): number {
    let value: number;

    switch (unity) {
      case TemperatureMeasureUnity.CELSIUS:
        value = 1;
        break;
      case TemperatureMeasureUnity.FAHRENHEIT:
        value = 33.8;
        break;
      case TemperatureMeasureUnity.KELVIN:
        value = 274.1;
        break;
      case TemperatureMeasureUnity.RANKINE:
        value = 493.47;
        break;
      default:
        value = 1;
    }

    return value;
  }

  temperature(
    city: string,
    unity: TemperatureMeasureUnity = TemperatureMeasureUnity.CELSIUS
  ): number {
    if (!city.length) {
      throw new MeteoException("City must be filled");
    }

    let value: number = 13;

    return value * this.unityValue(unity);
  }
}

export default Meteo;
