import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const PostWidget = ({ post }) => {
  const { data: session } = useSession();
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState('');
  const [liked, setLiked] = useState(post.likes.includes(session?.user?._id));
  const [pinned, setPinned] = useState(post.pins.includes(session?.user?._id));

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentObj = {
      user: session?.user?._id,
      text: newComment,
      profilePicture: session?.user?.profilePicture,
      createdAt: new Date(),
      CommentLikes: [],
    };
    setComments((prevComments) => [...prevComments, newCommentObj]);
    setNewComment('');
  };

  const handleLike = () => {
    setLiked((prevLiked) => !prevLiked);
    // Perform the necessary logic to add/remove the user from the post's likes array
  };

  const handlePin = () => {
    setPinned((prevPinned) => !prevPinned);
    // Perform the necessary logic to add/remove the user from the post's pins array
  };

  return (
    <div className="post-widget">
      <div className="post-content">
        <Image
          src={post.user.profilePicture}
          alt="Profile Image"
          width={50}
          height={50}
        />
        <p>{post.content}</p>
      </div>
      <div className="post-images">
        {post.images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index}`} width={200} height={200} />
        ))}
      </div>
      <div className="post-actions">
        <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
        <button onClick={handlePin}>{pinned ? 'Unpin' : 'Pin'}</button>
      </div>
      <div className="post-comments">
        {comments.map((comment) => (
          <div className="comment" key={comment._id}>
            <Image
              src={comment.profilePicture}
              alt="Profile Image"
              width={30}
              height={30}
            />
            <p>{comment.text}</p>
          </div>
        ))}
        {session && (
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Add a comment"
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PostWidget;
