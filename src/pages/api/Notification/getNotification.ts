/* eslint-disable prettier/prettier */
import ConnectDb from '../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import Notification from '../../../Server/Models/Notification/notification';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `GET`) {
    try {
        const noti =await  Notification.find()
        res.status(200).json({noti});
      }
      catch(err) {
       res.status(400).json({error:err.message});
      }
  
  }else{
    res.status(400).json(`Method Not Found`);
  }
};
export default ConnectDb(handler);
