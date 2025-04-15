import mongoose from "mongoose";

//connect to the mongodb database
const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=> console/console.log("DB Connected"),
    )
    await mongoose.connect(`${process.env.MONGODB_URI}`)
}
export default connectDB
