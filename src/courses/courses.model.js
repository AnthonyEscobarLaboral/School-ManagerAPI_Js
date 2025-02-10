import { Schema, model} from "mongoose";

const coursesSchema = Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        maxLength: [20, "Name cannot contain more than 16 characters"]
    },
    status:{
        type: Boolean,
        default: true
    },
    student: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
},
{
    versionKey: false,
    timeStamps: true
})

coursesSchema.methods.toJSON = function(){
    const {_id,__v, ...courses} = this.toObject()
    courses.cid = _id
    return courses
}

export default model("Courses", coursesSchema)