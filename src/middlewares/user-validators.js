import { body, param } from "express-validator";
import { usernameExists, userExists } from "../helpers/db-validators.js";
import { validationFields } from "./validation_fields.js";
import { handleErrors } from "./handle-errors.js";

export const registerValidator = [
    body("name").notEmpty().withMessage("name is required"),
    body("username").notEmpty().withMessage("username is required"),
    body("username").custom(usernameExists),
    body("password").isStrongPassword({
        minLength: 8,
        minLowercase:1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
    validationFields,
    handleErrors
]

export const loginValidator = [
    body("username").optional().isString().withMessage("Username needs to be a text string"),
    body("password").isLength({min: 8}).withMessage("password has to be at least 8 characters long"),
    validationFields,
    handleErrors
]

export const assignCoursesStudentValidator = [
    param("uid", "This id is not valid").isMongoId(),
    param("uid").custom(userExists),
    validationFields,
    handleErrors
]

export const updateStudentProfileValidator = [
    param("uid", "This id is not valid").isMongoId(),
    param("uid").custom(userExists),
    validationFields,
    handleErrors
]

export const disableStudentAccountValidator = [
    param("uid", "This id is not valid").isMongoId(),
    param("uid").custom(userExists),
    validationFields,
    handleErrors
]
