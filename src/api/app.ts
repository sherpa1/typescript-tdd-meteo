import express, { Request, Response } from "express";
import { NextFunction } from "express";
import Meteo from "../classes/Meteo";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  const m = new Meteo();

  const temperature = m.temperature("Nancy");

  res.json({ temperature });
});

export default app;
