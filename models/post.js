import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: [{
    type: String, // Assuming you store the URLs of the images
    required: true,
    max: 4
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    text: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String, // Assuming you store the URL of the profile picture
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    CommentLikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
  }],
  tags: [{
    type: String,
    max: 5
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  pins: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Post = models.Post || model('Post', postSchema);

export default Post;