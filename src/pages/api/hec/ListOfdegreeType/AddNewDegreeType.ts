/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Department,DegreeType} from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `POST`) {
    try{
    
        //const departmentId =new mongoose.Types.ObjectId(req.body.departmentId);
        const newDegreeType =await new DegreeType({
            degreeTypeTitle: req.body.DegreeType,
      })
     const newDegreeTypeSaved =await newDegreeType.save();
     const Updatedepartment = await Department.findByIdAndUpdate({
        _id: req.body.DepartmentId
        },
        {   
            $push: {
                degreetypes: {
                    _id: newDegreeTypeSaved._id
                }
            }
        })
       const updepartmentSaved=await Updatedepartment.save();
       res.status(200).json(
        {
        success:true,
        updepartmentSaved,
        message:`Successfully Added new DegreeType`
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
