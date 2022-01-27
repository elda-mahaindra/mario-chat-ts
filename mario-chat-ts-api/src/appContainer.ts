// ---------------------------------------------- modules import
import dotenv from "dotenv";
import express from "express";
import { Server } from "socket.io";

import { EventEnum } from "./enums/event";

class AppContainer {
  private io: Server;
  private requestHandlerMiddlewares: express.RequestHandler[];

  public app: express.Application;

  constructor() {
    this.app = express();
    this.io = new Server();
    this.requestHandlerMiddlewares = [];
  }

  private implementMiddlewares(): void {
    this.requestHandlerMiddlewares.forEach((rhm) => this.app.use(rhm));
  }

  private routes(): void {
    const router = express.Router();

    this.app.get("/route-test", (req, res) => {
      res.status(200).json({
        message: "You are connected with websocket-playlist-ts api.",
      });
    });

    this.app.use("/", router);

    this.app.use((req, res) => {
      const error = new Error("Request not recognized.");
      const response = { message: error.message };

      res.status(404).json(response);
    });

    this.app.use((err: any, req: express.Request, res: express.Response) => {
      const response = { message: err.message, err };

      res.status(500).json(response);
    });
  }

  public withMiddleware(middleware: express.RequestHandler) {
    this.requestHandlerMiddlewares.push(middleware);

    return this;
  }

  public start() {
    dotenv.config();

    const origin = process.env.ORIGIN;
    const port = process.env.PORT;

    if (!port) throw new Error("Failed to read environments variables.");

    this.implementMiddlewares();
    this.routes();

    const server = this.app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });

    this.io = new Server(server, { cors: { origin } });

    this.io.on("connection", (socket) => {
      console.log("made socket connection", socket.id);

      socket.on(EventEnum.CHAT, (data) => {
        this.io.sockets.emit(EventEnum.CHAT, data);
      });

      socket.on(EventEnum.TYPING, (data) => {
        socket.broadcast.emit(EventEnum.TYPING, data);
      });
    });
  }
}

export default AppContainer;
