/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import ApplicationModel from '../../../../Server/Models/Student/Application/Application';
import {isVerifiedApp} from '@/Server/MailSender/mailer'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
  const Application = await ApplicationModel.findByIdAndUpdate({_id:req.body.ApplicationId},{
        Status: req.body.applicationStatus,
      });
      console.log(Application)
      console.log(`file from client toserver :`,req.body.uploadDegreeLink)
     if (Application) {
        if(req.body.applicationStatus!=`submit`){
          const App = await ApplicationModel.findById({_id:req.body.ApplicationId})
          const gmail =await isVerifiedApp({toUser:{
            Status:req.body.applicationStatus,email:App.email,
            fileName:req.body.uploadDegreeLink}})
          console.log(gmail)
      }
        res.status(200).json({ success: true,Application,});
      } else {
        res.status(200).json({ success: false,error:`Not Found` });
      }
} else {
    res.status(400).json(`Method not Found`);
  }
};
export default ConnectDb(handler);
