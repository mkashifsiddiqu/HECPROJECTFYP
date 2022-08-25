/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import UserDetail from '../../../../Server/Models/Student/User/User_detail';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    const user = await UserDetail.findOneAndUpdate({ Email: req.body.email }, {
      First_Name: req.body.firstName,
      Middle_Name: req.body.middleName,
      Last_Name: req.body.lastName,
      Cell_Phone: req.body.Cell_Phone,
      Regligion: req.body.Regligion,
      Martial_Status: req.body.martialStatus,
      Date_of_Birth: req.body.dateofbirth,
      Domicile_Province: req.body.Domicile_Province,
      Domicile_City: req.body.Domicile_City,
      Age: req.body.Age,
      Gender: req.body.gender,
      Father_Name: req.body.FatherName,
      Father_CNIC: req.body.Father_CNIC,
      Father_Currently: req.body.Father_Currently,
      Address: req.body.address,
      Postal_Code: req.body.postalcode,
    });
    console.log(user)
    const userSaved = await user.save()
  if (userSaved) {
      res.status(201).json({ success: true, userSaved });
    } else {
      res.status(200).json({ success: false });
    }
} else {
    const user = await UserDetail.find().populate({ path: `Application`, strictPopulate: false });
    res.status(200).json({ user });
  }
};
export default ConnectDb(handler);
