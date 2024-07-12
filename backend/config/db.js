import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sachinnirate:SACHIN24@cluster0.lzoljy2.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}