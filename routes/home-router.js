import express from "express";
import homeControler from "../controler/home-controler.js";
const router = express.Router()
router.get("/", homeControler)

export default router