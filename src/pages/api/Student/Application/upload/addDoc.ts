/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import Document from '../../../../../Server/Models/Student/Document';
import UserDetail from '../../../../../Server/Models/Student/User/User_detail';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    const existDoc = await Document.findOne({ Email: req.body.email })
    if (existDoc) {
      const newDoc = await Document.findOneAndUpdate({ Email: req.body.email }, {
        frontSide: req.body.uploadFrontLink,
        backSide: req.body.uploadBackLink,
        degree: req.body.uploadDegreeLink,
        other: req.body.other
      });
      const newDocSaved = await newDoc.save();
      const user = await UserDetail.findOneAndUpdate({ Email: req.body.email },
        {
          $push: {
            Document: {
              _id: newDocSaved._id
            }
          }
        })
      const usersv = await user.save()
    } else {
      const newDoc = await new Document({
        frontSide: req.body.uploadFrontLink,
        backSide: req.body.uploadBackLink,
        degree: req.body.uploadDegreeLink,
        other: req.body.other,
        Email: req.body.email,
      });
      const newDocSaved = await newDoc.save();
      const user = await UserDetail.findOneAndUpdate({ Email: req.body.email },
        {
          $push: {
            Document: {
              _id: newDocSaved._id
            }
          }
        })
      const usersv = await user.save()
    }
    if (newDocSaved) {
      res.status(201).json({ success: true, newDocSaved });
    } else {
      res.status(201).json({ success: false });
    }
  } else {
    res.status(200).send(`This Methis not Found`);
  }
};
export default ConnectDb(handler);
