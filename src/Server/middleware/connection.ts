/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
const connectDb =
  (handler:any) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }
    // const conn = process.env.MONGO_URL    
    //Database #1
    // await mongoose.connect(`mongodb://127.0.0.1:27017/hecData`);
    //Database #2
    await mongoose.connect(`mongodb://127.0.0.1:27017/hecComplaintDv`);
    return handler(req, res);
  };
export default connectDb;
