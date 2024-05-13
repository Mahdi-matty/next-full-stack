import multer from 'multer';
import multerS3 from 'multer-s3';
import { v4 as uuidv4 } from 'uuid';
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'user-images-669af664-23f0-47fd-bd77-2745b6a066b7', // Replace with your S3 bucket name
    acl: 'private', // Set ACL to public-read for public access
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, uuidv4()); // Generate a unique key for each file uploaded
    },
  }),
}).single('image');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      upload(req, res, (err) => {
        if (err) {
          console.error('Error uploading file:', err);
          return res.status(500).json({ error: 'Failed to upload file to S3' });
        }
        res.status(200).json({ message: 'File uploaded successfully', imageUrl: req.file.location });
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'Failed to upload file to S3' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
