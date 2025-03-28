import mongoose from 'mongoose';
import { DB_NAME } from '../constants/constants.js';
import { config } from 'dotenv';

config();

const connectDB = async () => {
    try{
        const connectionInst = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
        console.log(`Database Connected !! DB Host : ${connectionInst.connection.host}`);
    }
    catch(error){
        console.log("Error: ", error);
        process.exit(1);
    }
}

export default connectDB;