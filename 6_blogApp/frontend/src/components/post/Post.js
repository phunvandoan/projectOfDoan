import { Link } from "react-router-dom";
import "./post.css";

function Post({ post, imgDefault }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      <img
        src={post.photo ? PF + post.photo : imgDefault}
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, index) => (
            <span className="postCat" key={index}>
              {c.name}
            </span>
          ))}
        </div>
        <span className="postTitle">
          <Link className="link" to={`/post/${post._id}`}>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default Post;
