/* eslint-disable prettier/prettier */
import ConnectDb from '@/Server/middleware/connection';
import Profile from '@/Server/Models/Student/Profile/profile'
import type { NextApiRequest, NextApiResponse } from 'next';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    try {
      const profile = await Profile.findOne({Email: req.body.email})
       res.status(201).json({ success: true, profile});
    } catch (e) {
      res.status(201).json({ success: false, Error: e.message });
    }

  } else {
    res.status(400).json({ success: false, Error: `Method Not Found` });
  }
};
export default ConnectDb(handler);
