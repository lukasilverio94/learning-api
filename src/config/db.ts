import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "your_mongo_url",
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting database: ", error);
    process.exit(1);
  }
}
