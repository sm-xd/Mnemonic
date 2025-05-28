import mongoose, { Schema, Types } from "mongoose";
import User from "./user.model";
const contentTypes = ['image', 'video', 'article', 'audio']; // Extend as needed

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: 'Tag' }],
  userId: { 
    type: Types.ObjectId, 
    ref: 'User', 
    required: true,
    validate: async function (value : Types.ObjectId) {
        const user = await User.findById(value);
        if (!user) {
            throw new Error('User not found');
        }
    }
},
});

export default mongoose.model('Content', contentSchema);