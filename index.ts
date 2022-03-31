import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import { connectDB } from "./src/core/db";
import router from "./src/routes";
import path from 'path';

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use(router)



connectDB();

if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
