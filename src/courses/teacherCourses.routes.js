import { Router } from "express"
import {newCourse,editCourses,deleteCourses } from "./courses.controller.js"
import {newCourseValidator,editCoursesValidator,deleteCoursesValidator } from "../middlewares/courses-validators.js"


const router = Router()

router.post("/createCourses", newCourseValidator, newCourse)

router.patch("/updateCourses/:cid", editCoursesValidator, editCourses)

router.delete("/deleteCourses/:cid", deleteCoursesValidator, deleteCourses)


export default router