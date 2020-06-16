import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const filePath = path.resolve(__dirname, '..', '..', 'tmp');

const uploadConfig = {
  direcory: filePath,
  storage: multer.diskStorage({
    destination: filePath,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;
      callback(null, fileName);
    },
  }),
};

export default uploadConfig;
