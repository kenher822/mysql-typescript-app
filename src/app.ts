import express, { Application } from "express";

const port=3000;

export class App {
    private app:Application ;

  constructor() {
    this.app = express();
  }
  async listen() {
    await this.app.listen(3000);
    console.log(`Server on port ${port}`);
  }
}
