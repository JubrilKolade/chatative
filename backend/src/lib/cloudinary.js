import { v2 as cloudinary } from 'cloudinary';
import { ENV } from './env.js';

cloudinary.env({
  cloud.name: ENV.CLOUDINARY_CLOUD_NAME,
  api_key: ENV.CLOUDINARY_API_KEY,
  api_secret: ENV.CLOUDINARY_API_SECRET,
});

export default cloudinary;