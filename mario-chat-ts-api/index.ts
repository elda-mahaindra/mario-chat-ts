// ---------------------------------------------- modules import
import cors from "cors";
import express from "express";

import AppContainer from "./src/appContainer";

new AppContainer()
  .withMiddleware(express.urlencoded({ extended: true }))
  .withMiddleware(express.json())
  .withMiddleware(cors())
  .start();
