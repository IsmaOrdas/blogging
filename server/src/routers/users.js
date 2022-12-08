import express from 'express';
import {auth} from '../middleware/auth.js';
const router = new express.Router();
import {User} from '../models/users.js';

router.post('/users', async (req, res) => {
    console.log('test')
  const user = new User(req.body);

  try {
    console.log('try')
    /* await user.save();
    const token = await user.generateAuthToken(); */
    res.status(201).send('test');
  } catch (e) {
    console.log(e)
    res.status(400).send(e);
  }
})

export { router as usersRouter };