/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Department } from '../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === `PATCH`) {
        try {
            const newDepartment = await Department.findByIdAndUpdate(
            {
                _id: req.body.DepartmentId
            },{
                departmentTitle: req.body.Department,
            })
            const newDepartmentSaved = await newDepartment.save();
            res
            .status(200)
            .json(
                {
                    success: true,
                    message: `Successfully Update Department`
                });
        } catch (e) {
            res
            .status(400)
            .json({
                success: false,
                error: e.message,
            })
        }

    } else {
        res.status(200).json(`this Method is not Found`)
    }
};
export default ConnectDb(handler);
