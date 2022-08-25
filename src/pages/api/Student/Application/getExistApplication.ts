/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import ApplicationModel from '../../../../Server/Models/Student/Application/Application';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    console.log(req.body.email)
      const Application = await ApplicationModel.find({email:req.body.email});
      if (Application) {
        res.status(200).json({ success: true,Application});
      } else {
        res.status(200).json({ success: false,Application:[],error:`Not Found` });
      }
} else {
    res.status(400).json(`Method not Found`);
  }
};
export default ConnectDb(handler);
