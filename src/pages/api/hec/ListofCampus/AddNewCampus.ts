/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next';
import { Institutes,Programs,Campuses} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `POST`) {
    try{
    
        //const programId =new mongoose.Types.ObjectId(req.body.programId);
        const newCampus =await new Campuses({
        campusTitle: req.body.Campus,
      })
     const newCampusSaved =await newCampus.save();
     const UpdateProgram = await Programs.findByIdAndUpdate({
        _id: req.body.programId
        },
        {   
            $push: {
                campuses: {
                    _id: newCampusSaved._id
                }
            }
        })
       const upProgramSaved=await UpdateProgram.save();
       res.status(200).json(
        {
        success:true,
        upProgramSaved,
        message:`Successfully Added new Campus`
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
