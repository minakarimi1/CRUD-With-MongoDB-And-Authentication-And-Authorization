import userConteroller from "../controller/user-conteroller.js";
import express from "express";
const router = express.Router()


router.post('/regiter',userConteroller.register)
router.get('/',userConteroller.getUsers)
export default router