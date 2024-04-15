import express from "express";
import dotenv from "dotenv";
 dotenv.config();
const app=express();
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from  "./routes/authRoutes.js";
import userRoutes from  "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import testRoutes from './routes/testRoutes.js';
import postRoutes from "./routes/postRoutes.js";


// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/test", testRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});