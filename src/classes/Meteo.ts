export enum Unity {
  CELSIUS = "CELSIUS",
  FAHRENHEIT = "FAHRENHEIT",
  KELVIN = "KELVIN",
  RANKINE = "RANKINE",
}

import MeteoException from "./MeteoException";

class Meteo {
  unityValue(unity: Unity): number {
    let value: number;

    switch (unity) {
      case Unity.CELSIUS:
        value = 1;
        break;
      case Unity.FAHRENHEIT:
        value = 33.8;
        break;
      case Unity.KELVIN:
        value = 274.1;
        break;
      case Unity.RANKINE:
        value = 493.47;
        break;
      default:
        value = 1;
    }

    return value;
  }

  temperature(city: string, unity: Unity = Unity.CELSIUS): number {
    if (!city.length) {
      throw new MeteoException("City must be filled");
    }

    let value: number = 13;

    return value * this.unityValue(unity);
  }
}

export default Meteo;
