import userConteroller from "../controller/user-conteroller.js";
import express from "express";
const router = express.Router()


router.post('/register',userConteroller.register)
router.post('/login',userConteroller.login)
export default router;