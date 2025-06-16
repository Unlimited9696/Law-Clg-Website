const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  text: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Announcement', announcementSchema); 