/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import ApplicationModel from '../../../../Server/Models/Student/Application/Application';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
  const Application = await ApplicationModel.findByIdAndUpdate({_id:req.body.ApplicationId},{
        Status: req.body.applicationStatus,
      });
      console.log(Application)
      if (Application) {
        res.status(200).json({ success: true,Application});
      } else {
        res.status(200).json({ success: false,error:`Not Found` });
      }
} else {
    res.status(400).json(`Method not Found`);
  }
};
export default ConnectDb(handler);
