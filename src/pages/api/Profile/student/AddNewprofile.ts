/* eslint-disable prettier/prettier */
import ConnectDb from '@/Server/middleware/connection';
import Profile from '@/Server/Models/Student/Profile/profile'
import type { NextApiRequest, NextApiResponse } from 'next';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    try {
      const ExistPro = await Profile.findOne({Email: req.body.email})
      if (ExistPro) {
        const profile = await Profile.findOneAndUpdate({ Email: req.body.email }, {
          imageurl: req.body.imageurl
        })
        profile.save()
        res.status(201).json({ success: true, profile,Status:`Update` });
      } else {
        const profile = await new Profile({
          Email: req.body.email,
          imageurl: req.body.imageurl
        })
        profile.save()
        res.status(201).json({ success: true, profile,Status:`new` });
      }
    } catch (e) {
      res.status(201).json({ success: false, Error: e.message });
    }

  } else {
    res.status(400).json({ success: false, Error: `Method Not Found` });
  }
};
export default ConnectDb(handler);
