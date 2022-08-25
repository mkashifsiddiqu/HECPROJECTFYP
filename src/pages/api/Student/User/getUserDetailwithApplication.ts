/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import UserDetail from '../../../../Server/Models/Student/User/User_detail';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    const user = await UserDetail.findOne({ Email: req.body.email })
    .populate(`Application`)
  if (user) {
      res.status(200).json({ success: true, user });
    } else {
      res.status(400).json({ success: false,Error:`User not Found` });
    }
} else {
    res.status(400).json({ success: false,error:`Method Not Found` });
  }
};
export default ConnectDb(handler);
