import mongoose from "mongoose";

const connectDB = async () =>{
    return mongoose.connect(
        'mongodb+srv://dharmishthaz95:sih23@sih.8dwkafc.mongodb.net/SIH',
        {
            useNewUrlParser : true,
            useUnifiedTopology:true,
        }
    )
};

export default connectDB;