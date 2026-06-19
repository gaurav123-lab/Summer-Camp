import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import dotenv from "dotenv";
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/enquiry",enquiryRoutes);

app.listen(process.env.PORT, () => {
 console.log(`Server is running on port ${process.env.PORT}`);
});