import express from "express";
import APIController from "../controller/APIController";

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers);
    router.post('/create-user', APIController.createUser);
    router.put('/update-user', APIController.updateUser);
    router.delete('/delete-user/:userID', APIController.deleteUser);
    return app.use('/api/v1/', router); 
}

export default initAPIRoute;