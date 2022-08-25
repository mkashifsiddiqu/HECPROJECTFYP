/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import Application from '@/Server/Models/Student/Application/Application'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == `GET`) {
        const app = await Application.find({'Status':`submit`});
        res.status(200).json({ succes: true, app });
    } else {
        res.status(400).json({ error: `This Method is not Allow` });
    }
};
export default ConnectDb(handler);
