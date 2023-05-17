import { describe, expect, test } from "@jest/globals";
import Meteo, { TemperatureMeasureUnity } from "../src/classes/Meteo";
import MeteoException from "../src/classes/MeteoException";

let m: Meteo;

beforeEach(() => {
  m = new Meteo();
});

describe("Meteo", () => {
  test("Meteo is defined", () => {
    expect(Meteo).toBeDefined();
  });
  test("Unity is defined", () => {
    expect(TemperatureMeasureUnity).toBeDefined();
  });
  test("Meteo m instance is defined", () => {
    expect(m).toBeDefined();
  });
  test("Meteo temperature throws Error when city is empty", () => {
    expect(() => {
      m.temperature("");
    }).toThrow();
  });
  test("Meteo temperature throws a MeteoException when city is empty", () => {
    expect(() => {
      m.temperature("");
    }).toThrowError(new MeteoException("City must be filled"));
  });
  test("Meteo temperature returns 13° (CELSIUS), when temperature measure unity is not filled", () => {
    expect(m.temperature("Nancy")).toEqual(13);
  });
  test("Meteo temperature returns CELSIUS, when temperature measure unity is CELSIUS", () => {
    expect(m.temperature("Nancy", TemperatureMeasureUnity.CELSIUS)).toEqual(13);
  });
  test("Meteo temperature returns a value expressed in FAHRENHEIT when temperature measure unity is FAHRENHEIT", () => {
    expect(m.temperature("Nancy", TemperatureMeasureUnity.FAHRENHEIT)).toEqual(
      439.4
    );
  });
  test("Meteo temperature returns a value expressed in KELVIN when temperature measure unity is KELVIN", () => {
    expect(m.temperature("Nancy", TemperatureMeasureUnity.KELVIN)).toEqual(
      3563.3
    );
  });
  test("Meteo temperature returns a value expressed in RANKINE when temperature measure unity is RANKINE", () => {
    expect(m.temperature("Nancy", TemperatureMeasureUnity.RANKINE)).toEqual(
      6415.110000000001
    );
  });
});
