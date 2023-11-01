import userConteroller from "../controller/user-conteroller.js";
import express from "express";
const router = express.Router()


router.post('/register',userConteroller.register)
export default router;