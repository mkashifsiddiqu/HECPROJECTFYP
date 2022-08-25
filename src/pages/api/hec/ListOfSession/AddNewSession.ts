/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { DegreeType,Session} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `POST`) {
    try{
    
        //const DegreeTypeId =new mongoose.Types.ObjectId(req.body.DegreeTypeId);
        const newsession =await new Session({
            sessionTitle: req.body.Session,
      })
     const newsessionSaved =await newsession.save();
     const UpdateDegreeType = await DegreeType.findByIdAndUpdate({
        _id: req.body.DegreeTypetId
        },
        {   
            $push: {
                sessions: {
                    _id: newsessionSaved._id
                }
            }
        })
       const upDegreeTypeSaved=await UpdateDegreeType.save();
       res.status(200).json(
        {
        success:true,
        upDegreeTypeSaved,
        message:`Successfully Added new session`
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
