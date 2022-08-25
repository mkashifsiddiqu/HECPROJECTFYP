/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prettier/prettier */
import nextConnect from 'next-connect';
import multer from 'multer';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
let FileName:string;
const upload = multer({
    storage: multer.diskStorage({
      destination: './ServerDataBase/DegreeTemplate/uploads',
      filename: (req, file, cb) => {
        FileName = file.fieldname+"_"+Date.now() +path.extname(file.originalname)
        cb(null,FileName)},
    }),
  });
const apiRoute = nextConnect({
  onError(error, req:NextApiRequest, res:NextApiResponse) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  // Handle any other HTTP method
  onNoMatch(req:NextApiRequest, res:NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
// Returns middleware that processes multiple files sharing the same field name.
const uploadMiddleware = upload.array('template');

// Adds the middleware to Next-Connect
apiRoute.use(uploadMiddleware);
// Process a POST request
apiRoute.post((req:NextApiRequest, res:NextApiResponse) => {
  const imagefile = FileName
  res.status(200).json({ data: 'success',imagefile});
});

export default apiRoute;
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};