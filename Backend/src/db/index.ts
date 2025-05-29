import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async (): Promise<void> => {
    console.log("Connecting to MongoDB...", process.env.MONGO_URI);
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

export default connectDB;