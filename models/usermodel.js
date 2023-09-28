const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Institutename:{
        type:String,
        required:true,
    },
    Students:{
        type:String,
        required:true,
        unique:true
    }
});

export default mongoose.model('users' , userSchema);