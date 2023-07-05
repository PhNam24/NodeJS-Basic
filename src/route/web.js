import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:userID', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit/user/:userID', homeController.editUser);
    router.post('/update-user', homeController.updateUser);
    return app.use('/', router); 
}

export default initWebRoute;