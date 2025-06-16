const express = require('express');
const router = express.Router();
const {
    getAllFaculty,
    getFaculty
} = require('../controller/faculty.controller');

// Import Important Links controller
const importantLinkRoutes = require('../routes/importantLink.routes');

// Public faculty routes
router.get('/faculty', getAllFaculty);
router.get('/faculty/:id', getFaculty);

// Important Links routes
router.use('/important-links', importantLinkRoutes);

module.exports = router;