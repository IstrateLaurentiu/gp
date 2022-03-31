import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import { connectDB } from "./src/core/db";
import router from "./src/routes";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use(router)

connectDB();

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
