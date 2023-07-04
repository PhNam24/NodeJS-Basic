import express from "express";
import homeController, { getHomepage } from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', getHomepage)

    return app.use('/', router); 
}

export default initWebRoute;