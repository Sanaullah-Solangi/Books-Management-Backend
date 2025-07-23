import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = Schema({
  email: { type: String, requred: true, unique: true },
  password: { type: String, requred: true },
  username: { type: String },
});

const UserModel = mongoose.models.Users || mongoose.model("Users", userSchema);

export default UserModel;
