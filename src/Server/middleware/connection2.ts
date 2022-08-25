/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  bufferMaxEntries: 0,
  useFindAndModify: true,
  useCreateIndex: true
}
const connectDb =
  (handler:any) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
     return handler(req, res);
    }
    // const conn = process.env.MONGO_URL    
    await mongoose.connect(`mongodb://127.0.0.1:27017/hecComplaintDv`);
    
    
    return handler(req, res);
  };
export default connectDb;
// /lib/dbConnect.js
