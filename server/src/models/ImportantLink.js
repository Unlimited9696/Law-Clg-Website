const mongoose = require('mongoose');

const importantLinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Link title is required'],
    trim: true,
    maxlength: [200, 'Link title cannot exceed 200 characters']
  },
  url: {
    type: String,
    required: [true, 'Link URL is required'],
    trim: true
  },
  isExternal: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
importantLinkSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('ImportantLink', importantLinkSchema); 