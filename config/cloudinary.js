// const cloudinary = require('cloudinary').v2;

// exports.cloudinaryConnect = () => {
//     try{
//         cloudinary.connect({
//             cloud_name: process.env.CLOUD_NAME,
//             api_key: process.env.API_KEY,
//             api_secret: process.env.API_SECRET
//         })
//     }
//     catch(error){
//         console.error("Error connecting to Cloudinary:", error);
//     }
// }

// Import cloudinary SDK
import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Configure cloudinary using credentials from .env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;