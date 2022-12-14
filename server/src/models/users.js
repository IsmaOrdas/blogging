import mongoose from 'mongoose';
import validator from 'validator';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import {Post} from '../models/posts.js';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate (value) {
      if (value.toLowerCase().trim().includes('password')) {
        throw new Error('Password cannot contain "password"')
      }
    }
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
},
{
  timestamps: true
})

userSchema.virtual('post', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'author'
})

// Custom instace method
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jsonwebtoken.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token;
}

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
}

// Custom method
userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('User not found');
  }

  const passwordMatch = await bcryptjs.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Incorrect username or password.');
  }

  return user
}

userSchema.pre('remove', async function (next) {
  const user = this
  await Post.deleteMany({ author: user._id })
  next();
})

userSchema.pre('save', async function(next) {
  const user = this // this refers to the document about to be save
  
  if (user.isModified('password')) {
    user.password = await bcryptjs.hash(user.password, 8);
  }

  next();
})

const User = mongoose.model('User', userSchema);

export { User };