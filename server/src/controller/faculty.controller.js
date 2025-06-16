const Faculty = require('../model/faculty.model');
const { catchAsync } = require('../utils/catchAsync');

// Create new faculty member
exports.createFaculty = catchAsync(async (req, res) => {
    const faculty = await Faculty.create(req.body);
    res.status(201).json({
        success: true,
        data: faculty
    });
});

// Get all faculty members
exports.getAllFaculty = catchAsync(async (req, res) => {
    const faculty = await Faculty.find({ isActive: true })
        .sort({ name: 1 });
    
    res.status(200).json({
        success: true,
        count: faculty.length,
        data: faculty
    });
});

// Get single faculty member
exports.getFaculty = catchAsync(async (req, res) => {
    const faculty = await Faculty.findById(req.params.id);

    if (!faculty) {
        return res.status(404).json({
            success: false,
            message: 'Faculty member not found'
        });
    }

    res.status(200).json({
        success: true,
        data: faculty
    });
});

// Update faculty member
exports.updateFaculty = catchAsync(async (req, res) => {
    const faculty = await Faculty.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );

    if (!faculty) {
        return res.status(404).json({
            success: false,
            message: 'Faculty member not found'
        });
    }

    res.status(200).json({
        success: true,
        data: faculty
    });
});

// Delete faculty member
exports.deleteFaculty = catchAsync(async (req, res) => {
    const faculty = await Faculty.findByIdAndUpdate(
        req.params.id,
        { isActive: false },
        { new: true }
    );

    if (!faculty) {
        return res.status(404).json({
            success: false,
            message: 'Faculty member not found'
        });
    }

    res.status(200).json({
        success: true,
        message: 'Faculty member deleted successfully'
    });
}); 