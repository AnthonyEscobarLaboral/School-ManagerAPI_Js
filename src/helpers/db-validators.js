import User from "../user/user.model.js"
import Course from "../courses/courses.model.js"


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
    const exists = await Course.findById(cid);
    if (!exists) {
        throw new Error("This course does not exists");
    }
};

export const coursesExists = async (cid = "") => {
    const created = await Course.findById(cid);
    if(created){
        throw new Error(`The course ${created} already exists `)
    }
}


