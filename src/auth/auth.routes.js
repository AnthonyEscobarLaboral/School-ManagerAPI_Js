import { Router } from "express"
import { newStudent,newTeacher, login} from "./auth.controller.js"
import { registerValidator, loginValidator } from "../middlewares/user-validators.js"

const router = Router()

router.post("/registerStudent",registerValidator, newStudent)

router.post("/registerTeacher",registerValidator, newTeacher)

router.post( "/login",loginValidator,login)

export default router
