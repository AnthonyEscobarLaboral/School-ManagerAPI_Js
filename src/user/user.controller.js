import User from "./user.model.js";
import Courses from "../courses/courses.model.js";

export const assignCoursesStudent = async (req, res) => {
    const { uid } = req.params
    const { coursesRecived } = req.body;
    try {

        const user = await User.findById(uid);
        if (user.courses.length + coursesRecived.length > 3) {
            return res.status(400).json({
                success: false,
                message: 'Cannot be assign to more courses'
            });
        }
        for (const cid of coursesRecived) {
            if (user.courses.includes(cid)) {
                return res.status(400).json({
                    success: false,
                    message: 'You are already assigned to this course'
                });
            }
        }

        user.courses.push(...coursesRecived);
        await user.save();

        for (const cid of coursesRecived) {
            const course = await Courses.findById(cid);
            course.student.push(uid);
            await course.save();
        }

        res.status(200).json({
            success: true,
            message: 'You have been assigned to the course successfully'
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed to assign courses',
            error: err.message
        });
    }
};


export const studentCourses = async (req, res) => {
    const { uid } = req.params

    try {
        const user = await User.findById(uid);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        res.status(200).json({
            success: true,
            user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed getting users and their courses assigned',
            error: err.message
        });
    }
};

export const updateStudentProfile = async (req, res) => {
    try {
        const { uid } = req.params;
        const newData = req.body;

        const user = await User.findByIdAndUpdate(uid, newData, { new: true });

        res.status(200).json({
            success: true,
            msg: 'Profile changes updated succesfully',
            user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'failed to update changes',
            error: err.message
        });
    }
};

export const disableStudentAccount = async (req, res) => {
    try {
        const { uid } = req.params

        const user = await User.findByIdAndUpdate(uid, { status: false }, { new: true })

        return res.status(200).json({
            success: true,
            message: "Student profile deleted",
            user
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "failed to delete student profile",
            error: err.message
        })
    }
};