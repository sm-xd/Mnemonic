const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true }
});

export default mongoose.model('Tag', tagSchema);
