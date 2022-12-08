import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import './db/mongoose.js';

const app = express();

app.use(cors());
app.use(express.json());

export { app as app };