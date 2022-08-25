/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import Document from '../../../../../Server/Models/Student/Document';
import UserDetail from '../../../../../Server/Models/Student/User/User_detail';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    
      const Doc = await Document.findOne({ Email: req.body.email});
      if (Doc) {
        res.status(201).json({ success: true,Doc});
      } else {
        res.status(201).json({ success: false });
      }
} else {
    res.status(200).send(`This Methis not Found`);
  }
};
export default ConnectDb(handler);
