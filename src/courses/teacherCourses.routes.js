import { Router } from "express"
import {newCourse,teacherCourses,editCourses,deleteCourses } from "./courses.controller.js"
import {newCourseValidator,editCoursesValidator,deleteCoursesValidator } from "../middlewares/courses-validators.js"


const router = Router()

router.post("/createCourses", newCourseValidator, newCourse)

router.get("/teacherCourses/:tid",teacherCourses)

router.patch("/updateCourses/:cid", editCoursesValidator, editCourses)

router.delete("/deleteCourses/:cid", deleteCoursesValidator, deleteCourses)


export default router