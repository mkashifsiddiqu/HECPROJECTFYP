//Set new Password with Hash 
/* eslint-disable prettier/prettier */
import ConnectDb from '../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import FPLogin from '../../../Server/Models/FocalPerson/FPLogin';
import CryptoJS from 'crypto-js'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `PATCH`) {
    const user = await FPLogin.findOneAndUpdate({ email: req.body.email },
      {
        password: CryptoJS.AES.encrypt(req.body.password, `secret123`).toString(),
        name: req.body.name,
      },
    );
    if(user){
      res.status(200).json({success:true,name:user.name});
    }else{
      res.status(200).json({success:false,error:`user not Found`});
    }
    
  } else {
    res.status(400).json(`this Method is not allow`);
  }
};
export default ConnectDb(handler);
