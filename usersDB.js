import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import users from "./models/usermodel.js"
import dbJson from "../db.json"

const start = async () => {
    try
    {
        await connectDB(process.env.MONGO_URL);
        await users.create(users.json);
        console.log("Success");
    }
    catch(error)
    {
        console.log(error);
    }
};
start();
