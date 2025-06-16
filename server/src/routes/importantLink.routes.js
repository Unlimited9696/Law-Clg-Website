const express = require('express');
const router = express.Router();
const importantLinkController = require('../controller/importantLink.controller');
const { verifyToken } = require('../middleware/auth');

// Public routes
router.get('/', importantLinkController.getAllLinks);
router.get('/:id', importantLinkController.getLinkById);

// Protected routes (admin only)
router.get('/admin/all', verifyToken, importantLinkController.getAllLinksAdmin);
router.post('/', verifyToken, importantLinkController.createLink);
router.put('/:id', verifyToken, importantLinkController.updateLink);
router.delete('/:id', verifyToken, importantLinkController.deleteLink);

module.exports = router; 