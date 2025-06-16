const express = require('express');
const router = express.Router();
const Announcement = require('../src/model/announcement.model');

// Get all announcements
router.get('/', async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.json({ success: true, announcements });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Create a new announcement
router.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    const announcement = new Announcement({ text });
    await announcement.save();
    res.json({ success: true, announcement });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Update an announcement
router.put('/:id', async (req, res) => {
  try {
    const { text } = req.body;
    const updated = await Announcement.findByIdAndUpdate(
      req.params.id,
      { text },
      { new: true }
    );
    if (!updated) return res.status(404).json({ success: false, message: 'Announcement not found' });
    res.json({ success: true, announcement: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete an announcement
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Announcement.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Announcement not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router; 