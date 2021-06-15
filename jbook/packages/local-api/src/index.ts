import express from "express";

export const serve = (port: number, filename: string, dir: string) => {
  const app = express();
  app.use(express.static("../../local-client/build"));

  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on("error", reject);
  });
};
