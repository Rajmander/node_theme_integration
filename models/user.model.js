import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
});

userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ mobile: 1 });

export default mongoose.model("User", userSchema);
