import express from "express";
import homeController from "../controller/home-controller.js";
const router = express.Router();

router.get("/", homeController.getHomeController)

export default router;