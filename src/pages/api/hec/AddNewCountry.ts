/* eslint-disable prettier/prettier */
import ConnectDb from '../../../Server/middleware/connection2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Country} from '../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `GET`) {
    try{
      const country =await  new Country({
        countryTitle: req.body.countryTitle,
      })
      const savedCountry = country.save() 
      res.status(201).json({
        success:true,
        savedCountry
      })
    }catch(e){
      res.status(400).json({
        success:false,
        error:e.message
      })
    }
    
  }else if(req.method === `POST`) {
    const country =await new Country({
      countryTitle:req.body.countryTitle
    })
    const countrysaved =await country.save()
    res.status(201).json({countrysaved});
  }
  else {
    res.status(200).json(`this Method is not Found`)
  }
};
export default ConnectDb(handler);
