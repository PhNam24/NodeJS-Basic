import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//set up view engine
configViewEngine(app);

//init web route
initWebRoute(app);

initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})