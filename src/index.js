import express from "express";
import authRoutes from "../routes/auth.js";
// import userRoutes from "../routes/users.js";
// import postRoutes from "../routes/posts.js";
import cookieParser from "cookie-parser";
import { errorHandler,notFound } from "../middleware/error.js";
// import multer from "multer";

process.on('uncaughtException', (err) => {
  console.log(err.message, err.name);
    process.exit(1);
});
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use(errorHandler);
app.use(notFound)
app.listen(8800, () => {
    console.log("Connected!");
  });
  process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });