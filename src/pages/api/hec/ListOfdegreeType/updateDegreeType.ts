/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { DegreeType } from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === `PATCH`) {
        try {
            const newDegreeType = await DegreeType.findByIdAndUpdate(
                {
                    _id: req.body.DegreeTypetId
                }, {
                degreeTypeTitle: req.body.DegreeType,
            })
            const newDegreeTypeSaved = await newDegreeType.save();
            res.status(200).json(
                {
                    success: true,
                    message: `Successfully Update new DegreeType`
                });
        } catch (e) {
            res.status(400).json({
                success: false,
                error: e.message,
            })
        }

    } else {
        res.status(200).json(`this Method is not Found`)
    }
};
export default ConnectDb(handler);
