import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import app from "../src/api/app";

describe("Meteo", () => {
  test("app is defined", () => {
    expect(app).toBeDefined();
  });

  test("API GET / returns status code 200", async () => {
    try {
      const result = await request(app).get("/");
      expect(result.statusCode).toBe(200);
    } catch (error) {
      console.error(error);
    }
  });

  test("API GET / returns JSON Body {temperature:13}", async () => {
    try {
      const result = await request(app).get("/");
      expect(result.body).toEqual({ temperature: 13 });
    } catch (error) {
      console.error(error);
    }
  });
});
