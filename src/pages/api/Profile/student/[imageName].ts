/* eslint-disable prettier/prettier */
import fs from 'fs'
import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next';
function imageProvider(req:NextApiRequest, res:NextApiResponse) {
    const { imageName } = req.query;
    const imagePath = path.join(process.cwd(), `ServerDataBase/Profile/uploads/${imageName}`);
    const imageBuffer = fs.readFileSync(imagePath)
    console.log(imagePath);
    res.setHeader(`Content-Type`, `image/png`)
    res.send(imageBuffer)
}

export default imageProvider;
