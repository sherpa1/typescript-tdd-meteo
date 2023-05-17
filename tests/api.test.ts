import { describe, expect, test } from "@jest/globals";
import Meteo, { Unity } from "../src/classes/Meteo";

let m: Meteo;

beforeEach(() => {
  m = new Meteo();
});

describe("Meteo", () => {
  test("Meteo is defined", () => {
    expect(Meteo).toBeDefined();
  });
  test("Unity is defined", () => {
    expect(Unity).toBeDefined();
  });
  test("Meteo m instance is defined", () => {
    expect(m).toBeDefined();
  });
  test("Meteo temperature throws Error when city is empty", () => {
    expect(() => {
      m.temperature("");
    }).toThrow();
  });
});
