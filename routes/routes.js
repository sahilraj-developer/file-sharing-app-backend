import express from 'express';
import { uploadImage, downloadImage } from '../controller/image-controller.js';
import multer from 'multer';
import upload from '../utils/upload.js';
const router = express.Router();



router.post('/upload', upload.single('file'), uploadImage);

router.get('/file/:id', downloadImage);

export default router;