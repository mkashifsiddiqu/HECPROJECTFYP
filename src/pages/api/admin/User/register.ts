/* eslint-disable prettier/prettier */

import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import AdminLogin from '../../../../Server/Models/Admin/AdminLogin';
import CryptoJS from 'crypto-js'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    const User = await AdminLogin({
      name:req.body.name,
      email: req.body.email,
      password: CryptoJS.AES.encrypt( req.body.password,`secret123`).toString(),
      pages: req.body.pages,
    });
    const UserSaved = await User.save();
    if (UserSaved) {
      res.status(201).json({ success: true });
    } else {
      res.status(201).json({ success: false });
    }
  } else {
    const user = await AdminLogin.find();
    res.status(200).json({ user });
  }
};
export default ConnectDb(handler);
