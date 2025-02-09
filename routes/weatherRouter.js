import express from "express";
import weatherController from "../controllers/weatherController.js";

const routerWeather = express.Router();

routerWeather.get("/:city", weatherController.getWeather);

export default routerWeather;
