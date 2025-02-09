import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routerBook from "./routes/bookRoutes.js";
import routerWeather from "./routes/weatherRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use("/books", routerBook);
app.use("/weather", routerWeather);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" Connected to MongoDB");
    
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  } catch (error) {
    console.error(" Database connection error:", error);
  }
};

connectDB();
