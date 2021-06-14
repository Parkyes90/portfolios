import express from "express";
export const serve = (port: number, filename: string, dir: string) => {
  const app = express();
  app.listen(port, () => {
    console.log("Listening on port", port);
  });
  console.log("saving/fetching cells from", filename);
  console.log("that file is in dir", dir);
};
