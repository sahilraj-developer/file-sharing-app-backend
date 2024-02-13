import express from 'express';
import router from './routes/routes.js'
import dotenv from 'dotenv';
import cors from 'cors';
import DBConecction from './database/db.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 6001;
app.use(cors());
app.use('/',router);

DBConecction();

app.listen(port,()=> console.log(`server is running in the port ${port}`))