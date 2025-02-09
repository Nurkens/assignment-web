import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, default: new Date().getFullYear() },
    genre: { type: String, default: "Unknown" },
});

export default mongoose.model("Book", bookSchema);
