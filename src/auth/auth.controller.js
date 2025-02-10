import { hash, verify } from "argon2"
import User from "../user/user.model.js";
import { generateJWT } from "../helpers/generate-jwt.js";

//creacion de un nuevo estudiante
export const newStudent = async (req, res) => {
    try {
        const studentReceived = req.body;

        const encryptedPassword = await hash(studentReceived.password)

        if(studentReceived.role === "TEACHER_ROLE"){
            const newRole = "STUDENT_ROLE"
            studentReceived.role = newRole
        }//rol predeterminado

        studentReceived.password = encryptedPassword

        await User.create(studentReceived);

        return res.status(201).json({
            succes:true,
            message: "your student account has been created",
            studentReceived
        });
    } catch (err) {
        return res.status(500).json({
            succes:false,
            message: "Student registration failed",
            error: err.message
        });
    }
}

//creacion de un nuevo maestro
export const newTeacher = async (req, res) => {
    try {
        const teacherReceived = req.body;

        const encryptedPassword = await hash(teacherReceived.password)

        if(teacherReceived.role === "STUDENT_ROLE"){
            const newRole = "TEACHER_ROLE"
            teacherReceived.role = newRole
        }//rol predeterminado

        teacherReceived.password = encryptedPassword

        await User.create(teacherReceived);

        return res.status(201).json({
            succes:true,
            message: "your teacher account has been created",
            teacherReceived
        });
    } catch (err) {
        return res.status(500).json({
            succes:false,
            message: "Teacher registration failed",
            error: err.message
        });
    }
}



export const login = async (req, res) => {
    const {username, password } = req.body

    try{
        const user = await User.findOne({
            $or:[{username: username}, {password: password}]
        })

        if(!user){
            return res.status(400).json({
                message: "Username incorrect nor found",
                error:"Not found"
            })
        }

        const validPassword = await verify(user.password, password)

        if(!validPassword){
            return res.status(400).json({
                message: "incorrect password",
                error: "incorrect password"
            })
        }

        const token = await generateJWT(user.id)

        return res.status(200).json({
            message: "Login successful",
            userDetails: {
                token: token,
                user
            }
        })
    }catch(err){
        return res.status(500).json({
            message: "login failed, server error",
            error: err.message
        })
    }
}