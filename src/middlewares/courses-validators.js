import { body, param } from "express-validator";
import { coursesFound, coursesExists } from "../helpers/db-validators.js";
import { validationFields } from "./validation_fields.js";
import { handleErrors } from "./handle-errors.js";

export const newCourseValidator = [
    body("name").notEmpty().withMessage("name is required"),
    body("name").custom(coursesExists),
    validationFields,
    handleErrors
]

export const editCoursesValidator = [
    param("cid", "This id is not valid").isMongoId(),
    param("cid").custom(coursesFound),
    validationFields,
    handleErrors
]

export const deleteCoursesValidator = [
    param("cid", "This id is not valid").isMongoId(),
    param("cid").custom(coursesFound),
    validationFields,
    handleErrors
]
