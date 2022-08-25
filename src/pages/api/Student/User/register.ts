/* eslint-disable prettier/prettier */

import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import stdUser from '../../../../Server/Models/Student/User/StdLogin';
import UserDetail from '@/Server/Models/Student/User/User_detail';
import CryptoJS from 'crypto-js'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    const User = await stdUser({
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      Email: req.body.Email,
      password:CryptoJS.AES.encrypt( req.body.password,`secret123`).toString(),
      identityNumber:req.body.identityNumber,
      identityType:req.body.identityType,
      Nationality:req.body.Nationality,
      phone:req.body.phone
    });
    const UserSaved = await User.save();
    const Userdetail = await new UserDetail({
      Email: req.body.Email,
    })
    const UserDetailSaved = await Userdetail.save();
    if (UserSaved) {
      res.status(201).json({ success: true,UserSaved});
    } else {
      res.status(201).json({ success: false });
    }
    
  } else {
    const user = await stdUser.find();
    res.status(200).json({ user });
  }
};
export default ConnectDb(handler);
