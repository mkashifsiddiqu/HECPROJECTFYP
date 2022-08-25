/* eslint-disable prettier/prettier */

import ConnectDb from '../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import FPLogin from '../../../Server/Models/FocalPerson/FPLogin';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if((req.method == `DELETE`)){
    const user = await FPLogin.findOneAndDelete({email:req.body.email})
    if(user){
        res.status(200).json({succes:true,msg:`Focal Person (${req.body.email}) is Delete Successfully!`  });
    }else{
        res.status(200).json({succes:false,error:`User not Found!`  });
    }
  }else{
    res.status(400).json(`This Method is not Allow`);
  }
};
export default ConnectDb(handler);
