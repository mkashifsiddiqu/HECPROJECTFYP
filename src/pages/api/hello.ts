/* eslint-disable prettier/prettier */
import ConnectDb from '../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `GET`) {
    res.status(200).json(`Api is Working.........`);
  }
};
export default ConnectDb(handler);
