import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected Successfully to ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error COnnecting DB ${error}`);
        process.exit(1);
    }
}