'use strict';
import User from "../user/user.model.js";
import Courses from "../courses/courses.model.js";

export const newCourse = async (req, res) => {
    const data = req.body;

    try {
        const teacher = await User.findById(data.teacher);

        if (teacher === null) {
            return res.status(404).json({
                success: false,
                message: 'Teacher id not found'
            });
        }

        if (teacher.role === "STUDENT_ROLE") {
            return res.status(401).json({
                success: false,
                message: 'Only teachers are allowed to create a course'
            });
        }

        const course = new Courses({
            ...data,
            teacher: data.teacher,
        });
        await course.save();

        teacher.courses.push(course._id);
        await teacher.save();

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

export const teacherCourses = async (req, res) => {
    const { tid } = req.params

    try {
        const teacher = await User.findById(tid);
        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "teacher not found"
            })
        }
        res.status(200).json({
            success: true,
            teacher
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed getting teachers data',
            error: err.message
        });
    }
};

export const editCourses = async (req, res) => {
    try {
        const { cid } = req.params;
        const { name } = req.body;
      
        const course = await Courses.findByIdAndUpdate(cid, {name: name}, { new: true });
        

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

        const course = await Courses.findByIdAndUpdate(cid, { status: false }, { new: true })

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