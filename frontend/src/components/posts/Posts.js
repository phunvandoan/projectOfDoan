import Post from "../post/Post";
import "./posts.css";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p, index) => (
        <Post
          key={index}
          post={p}
          imgDefault="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
      ))}
    </div>
  );
}

export default Posts;
