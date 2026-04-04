import express from "express";
import { fileUploadFunction as fileUploadController } from "../controllers/fileupload.controller.js";

import multer from "multer";

const upload = multer({ dest: "myUploads/" }); //myUploads => tempraory folder name

const router = express.Router();


router.post("/uploadfile", upload.single("myFile"),  fileUploadController) // :3000/api/v1/file/uploadfile

//router.get("/getfile", getFileController)  // :3000/api/v1/file/getfile



export default router;