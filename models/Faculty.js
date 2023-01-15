import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 5000,
    },
    img: {
      type: String,
      required: true,
      maxlength: 200,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Faculty ||
  mongoose.model("Faculty", FacultySchema);
