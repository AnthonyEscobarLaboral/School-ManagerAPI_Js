'use strict';
import User from "../user/user.model.js";
import Courses from "../courses/courses.model.js";

export const newCourse = async (req, res) => {
    const { courseName, tid } = req.body;

    try {
        const teacher = await User.findById(tid);

        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: 'Teacher id not found'
            });
        }

        const course = new Courses({
            courseName,
            teacher: tid,
        });
        await course.save();

        res.status(200).json({
            success: true,
            course
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'failed to create course',
            error
        });
    }
};


export const editCourses = async (req, res) => {
    try {
        const { cid } = req.params;
        const newName = req.body;
      
        const course = await Courses.findByIdAndUpdate(cid, {name: newName}, { new: true });

        res.status(200).json({
            success: true,
            msg: 'Changes updated succesfully',
            course,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'failed to update changes',
            error: err.message
        });
    }
};
  
export const deleteCourses = async (req, res) => {
    try {
        const { cid } = req.params

        const course = await course.findByIdAndUpdate(cid, { status: false }, { new: true })

        await Promise.all(course.students.map(async (sid) => {
          const studentsArray = await User.findById(sid);
          const index = studentsArray.courses.indexOf(cid);
          if (index !== -1) {
            studentsArray.courses.splice(index, 1); //el metodo splice elimina el curso del estudiante 
            await studentsArray.save(); 
          }
        }));

        return res.status(200).json({
            success: true,
            message: "Course deleted",
            course
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "failed to delete course",
            error: err.message
        })
    }
};