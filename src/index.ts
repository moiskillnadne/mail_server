import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).json("OK");
});

app.get("*", function (req, res) {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server started successfully`);
});
