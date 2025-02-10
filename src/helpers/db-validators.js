import User from "../user/user.model.js"
import Courses from "../courses/courses.model.js"


export const usernameExists = async (username = "") => {
    const existe = await User.findOne({username})
    if(existe){
        throw new Error(`The username ${username} is already registered`)
    }
}

export const userExists = async (uid = " ") => {
    const existe = await User.findById(uid)
    if(!existe){
        throw new Error("User does not exists")
    }
}

export const coursesFound = async (cid = "") => {
    const found = await Courses.findById(cid)
    if (!found) {
        throw new Error("This course does not exists");
    }
};

export const coursesExists = async (name = "") => {
    const exists = await Courses.findOne({name})
    if(exists){
        throw new Error(`The course ${name} already exists `)
    }
}


