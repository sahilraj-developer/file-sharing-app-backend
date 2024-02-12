import express from 'express';
import { uploadImage, downloadImage } from '../controller/image-controller.js';
import multer from 'multer';

const router = express.Router();


const fileUpload = multer({ 
    limits: { fileSize: 5 * 1024 * 1024 } 
});

router.post('/upload', fileUpload.single('file'), uploadImage);

router.get('/file/:id', downloadImage);

export default router;