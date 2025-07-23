import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Is Connected Successfully");
  } catch (error) {
    console.log("DB Error =>", error);
  }
};

export default connectDB;
