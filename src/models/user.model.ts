import mongoose, { Schema} from "mongoose";

const userSchema : Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model('User', userSchema);