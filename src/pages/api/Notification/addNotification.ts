/* eslint-disable prettier/prettier */
import ConnectDb from '../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import Notification from '../../../Server/Models/Notification/notification';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    const noti =await new Notification({
        NotificationType:req.body.NotificationType,
        NotificationContent:req.body.NotificationContent,
        NotificationTime:req.body.NotificationTime,
        isRead:req.body.isRead
    })
   const savNoti = await noti.save()
    res.status(400).json({savNoti});
  }else{
    res.status(400).json(`Method Not Found`);
  }
};
export default ConnectDb(handler);
