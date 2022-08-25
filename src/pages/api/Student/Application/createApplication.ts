/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import ApplicationModel from '../../../../Server/Models/Student/Application/Application';
import UserDetail from '../../../../Server/Models/Student/User/User_detail';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    
      const Application = await new ApplicationModel({
        Application_Type: req.body.ApplicationType,
        Date: req.body.date,
        Status: req.body.applicationStatus,
        email: req.body.email
      });
      console.log(Application)
      const AppSaved = await Application.save();
      const user = await new UserDetail.findOneAndUpdate({'Email': req.body.email},{
        $push:{
          Application:{
            _id:AppSaved._id
          }
        }
      })
     const userSav = user.save()
      if (AppSaved) {
        res.status(201).json({ success: true,AppSaved});
      } else {
        res.status(201).json({ success: false });
      }
} else {
    const user = await ApplicationModel.find();
    res.status(200).json({ user });
  }
};
export default ConnectDb(handler);
