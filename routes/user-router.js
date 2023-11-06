import userConteroller from "../controller/user-conteroller.js";
import express from "express";
const router = express.Router()
import auth from '../middlewares/auth.js'


router.post('/register',userConteroller.register)

// router.use(auth)
router.post('/login',userConteroller.login)
export default router;