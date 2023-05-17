import express, { Request, Response } from "express";
import { NextFunction } from "express";
import dotenv from "dotenv";
import Meteo from "./classes/Meteo";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  const m = new Meteo();

  const temperature = m.temperature("Nancy");

  res.json({ temperature });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
