/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next';
import { Institutes,Campuses,Department} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `POST`) {
    try{
    
        //const CampusId =new mongoose.Types.ObjectId(req.body.CampusId);
        const newDepartment =await new Department({
            departmentTitle: req.body.Department,
      })
     const newDepartmentSaved =await newDepartment.save();
     const UpdateCampus = await Campuses.findByIdAndUpdate({
        _id: req.body.campusId
        },
        {   
            $push: {
                departments: {
                    _id: newDepartmentSaved._id
                }
            }
        })
       const upCampusSaved=await UpdateCampus.save();
       res.status(200).json(
        {
        success:true,
        upCampusSaved,
        message:`Successfully Added new Department`
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
