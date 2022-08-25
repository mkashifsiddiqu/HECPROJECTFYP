/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Session} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `PATCH`) {
    try{
        const newsession =await Session.findByIdAndUpdate({
            _id: req.body.SessionId
            },{
            sessionTitle: req.body.Session,
      })
     const newsessionSaved =await newsession.save();
     res.status(200).json(
        {
        success:true,
        message:`Successfully Update session`
    });
    }catch(e){
      res.status(400).json({
        success:false,
        error:e.message,
    })
    }
    
  }else{
    res.status(200).json(`this Method is not Found`)
  }
};
export default ConnectDb(handler);
