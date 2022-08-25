/* eslint-disable prettier/prettier */
import ConnectDb from '../../../Server/middleware/connection2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Country,Institutes} from '../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `POST`) {
    try{
       
      const institute =await  new Institutes({
        instituteTitle: req.body.instituteTitle,
      })
      const ins =await institute.save() 
      console.log(ins)
      const UpdateCountry = await Country.findOneAndUpdate({
        countryTitle: req.body.countryTitle
        },
        {   
            $push: {
                institutes: {
                    _id: ins._id
                }
            }
        })
       const UpdateInsistuteSaved=await UpdateCountry.save();
       res.status(201).json({
        success:true,
        UpdateInsistuteSaved,ins
      })
    }catch(e){
      res.status(400).json({
        success:false,
        error:e.message
      })
    }
    
  }else {
    res.status(200).json(`this Method is not Found`)
  }
};
export default ConnectDb(handler);
