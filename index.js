import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/database.js"; //NOTE : name: must be same as in the database.js file.
import fileRouter from "./routes/fileupload.route.js";
// import userRouter from "./routes/user.route.js";

dotenv.config();
const app = express();

//ye sabhi tarh k frontend ko allow krta hai request bhjene ko.
app.use(cors());


connectDB();


app.use("/api/v1/file", fileRouter);

// app.use("/api/v1/user", userRouter)


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => { console.log("Server is listening on " + PORT + "...")})