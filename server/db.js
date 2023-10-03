import mongoose from 'mongoose';
import {MONGODB_URI} from './config.js';

export const connectMongoose = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MONGOSEDB Connected 🚀: ${conn.connection.name}`)
  } catch{
    console.log(`ERROR: ${error.message}`);
    process.exit(1);
  }
}