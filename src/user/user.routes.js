import { Router } from "express"
import { assignCoursesStudent,studentCourses,updateStudentProfile,disableStudentAccount} from "./user.controller.js"
import { assignCoursesStudentValidator,updateStudentProfileValidator,disableStudentAccountValidator} from "../middlewares/user-validators.js"

const router = Router()

router.post("/assignCourses/:uid", assignCoursesStudentValidator, assignCoursesStudent)

router.get("/studentCourses/:uid", studentCourses)

router.put("/updateStudent/:uid", updateStudentProfileValidator, updateStudentProfile)

router.delete("/deleteStudentAccount/:uid", disableStudentAccountValidator, disableStudentAccount)

export default router
