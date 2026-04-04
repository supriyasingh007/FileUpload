import cloudinary from "../config/cloudinary.js";
import fileModel from "../models/file.model.js";

export const fileUploadFunction = async (req, res) => {
  try {
    //1.user req se file lenge
    const myfile = req.file;

    //2.agar file nahi hai to functionse return kr jao.....age kaam mat kro
    if (!myfile) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    //3.cloudanry per upload karenge usse url lenge
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
    });

    //4. url ko db me store krnege

    //db me upload ho gaya hai. 
    const saveFile = await fileModel.create({
      fileName: req.file.originalname,
      fileUrl: result.secure_url,
    });

    //5. user ko final res ki kaam ho gaya hai.
    res.status(200).json({message: "Uploaded successfully!", file: saveFile})   

  } catch (error) {
    //error hnadle
    console.log(error)
    res.status(500).json({message: "Something went wrong in fileupload.controller.js", error})
  }
};
