// const mongoose = require('mongoose');

import mongoose from "mongoose";


// require('dotenv').config();

// exports.connect = () => {
//     mongoose.connect(process.env.MONGODB_URL)
//     .then(() => console.log("DB Connection Successful"))
//     .catch((error) => {
//         console.log("DB Connection issue", error);
//         process.exit(1);
//     });
// }


//then catch -> async await
export const connectDB = async () => {

    try { //then

        await mongoose.connect(process.env.MONGODB_URL) //task thoda time
        console.log("✅ Database connected");
        
    } catch (error) { //catch
        console.log("Database connection failed in database.js", error)
        process.exit(1);
    }
}





// export default defaltFunction; //defalt sirf ek hi kr skte hai.

//js

//javascript-> rukta nahi
// 1. imidiately -> js
// 2. thoda time

//dp -> interaction -> time lagega






