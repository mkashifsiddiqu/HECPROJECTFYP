/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import ApplicationModel from '../../../../../Server/Models/Student/Application/Application';
import Mode from '../../../../../Server/Models/Student/Application/moodeofAttestation'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == `POST`) {
        try {
            const App =await ApplicationModel.findOne({ 'Email': req.body.email }).populate(`ModeOfAttestation`)
            if (App) {
                res.status(200).json({ success: true, App });
            } else {
                res.status(400).json({ success: false });
            }
        } catch (e) {
            res.status(501).json({ success: false,error:e.message });
        }

    } else {
        res.status(400).json({ success: false, error: `Method Not Found` });
}
}
export default ConnectDb(handler);
