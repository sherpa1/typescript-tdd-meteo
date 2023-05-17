import { describe, expect, test } from "@jest/globals";
import Meteo, { TemperatureUnity } from "../src/classes/Meteo";
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
    expect(TemperatureUnity).toBeDefined();
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
  test("Meteo temperature returns 13° (CELSIUS), when Temperature Unity is not filled", () => {
    expect(m.temperature("Nancy")).toEqual(13);
  });
  test("Meteo temperature returns CELSIUS, when Temperature Unity is CELSIUS", () => {
    expect(m.temperature("Nancy", TemperatureUnity.CELSIUS)).toEqual(13);
  });
  test("Meteo temperature returns a value expressed in FAHRENHEIT when Temperature Unity is FAHRENHEIT", () => {
    expect(m.temperature("Nancy", TemperatureUnity.FAHRENHEIT)).toEqual(439.4);
  });
  test("Meteo temperature returns a value expressed in KELVIN when Temperature Unity is KELVIN", () => {
    expect(m.temperature("Nancy", TemperatureUnity.KELVIN)).toEqual(3563.3);
  });
  test("Meteo temperature returns a value expressed in RANKINE when Temperature Unity is RANKINE", () => {
    expect(m.temperature("Nancy", TemperatureUnity.RANKINE)).toEqual(
      6415.110000000001
    );
  });
});
