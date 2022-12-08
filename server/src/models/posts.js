import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  cover_photo: {
    type: String,
    required: false
  }
},
{
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export { Post };