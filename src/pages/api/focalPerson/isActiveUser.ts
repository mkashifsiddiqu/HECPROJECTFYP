/* eslint-disable prettier/prettier */

import ConnectDb from '../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import FPLogin from '../../../Server/Models/FocalPerson/FPLogin';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if((req.method == `PATCH`)){
    const user = await FPLogin.findOneAndUpdate({email:req.body.email},{isActive:req.body.isActive})
    res.status(200).json({user});
  }else{
    res.status(400).json(`This Method is not Allow`);
  }
};
export default ConnectDb(handler);
