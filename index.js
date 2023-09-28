import express from "express";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";

dotenv.config(); 

const app =  express();

 connectDB();
const PORT = process.env.PORT || 8080
app.get("/",(req,res) => {
    res.send("Hello");
});



const start = async () => {
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server Running on ${PORT}`);
        });
    } catch (error) {
        console.log(error)
        
    }
}