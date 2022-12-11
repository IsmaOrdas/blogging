import express from 'express';
import {auth} from '../middleware/auth.js';
const router = new express.Router();
import {User} from '../models/users.js';

router.post('/users', async (req, res) => {
  try {
    if (!Object.keys(req.body) || !req.body.username || !req.body.password) {
      res.status(400).send('Invalid input.');
    }

    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({user, token});
  } catch (e) {
    res.status(400).send(e);
  }
})

export { router as usersRouter };