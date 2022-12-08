import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import './db/mongoose.js';
import {usersRouter} from './routers/users.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(usersRouter);

export { app as app };