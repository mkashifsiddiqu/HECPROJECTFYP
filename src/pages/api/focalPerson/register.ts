/* eslint-disable prettier/prettier */
import ConnectDb from '../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import FPLogin from '../../../Server/Models/FocalPerson/FPLogin';
import {sendNewPassword} from '../../../Server/MailSender/mailer'
import CryptoJS from 'crypto-js'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    const User = await FPLogin({
      email: req.body.email,
      instituteName: req.body.instituteName,
      pages:req.body.pages,
      isActive:req.body.isActive
    });
    const hash = CryptoJS.AES.encrypt(req.body.email,`hash123`).toString()
    const UserSaved = await User.save();
    const MailSend= await sendNewPassword({toUser:{email:req.body.email,instituteName:req.body.instituteName},hash:CryptoJS.AES.encrypt(req.body.email,`hash123`).toString()})
    if (hash) {
      res.status(201).json({ success: true,UserSaved,hash});
    } else {
      res.status(432).json({ success: false });
    }
  } else{
    res.status(400).json(`this Method is not allow`);
  }
};
export default ConnectDb(handler);
