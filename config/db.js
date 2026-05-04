import mongoose, { Schema } from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rajmander:progress_1@cluster0.4pdevjd.mongodb.net/sneat_theme",
    );
    console.log(`Db Connected successfully`);
  } catch (error) {
    console.error(`Error while db connection ${error}`);
  }
};
