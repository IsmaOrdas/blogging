import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  published_on: {
    type: Date,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
},
{
  timestamps: true
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book;