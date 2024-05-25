import { TiDelete } from "react-icons/ti";
import { AiFillLike } from "react-icons/ai";
import { useContext } from "react";
import { PostList as PostListData } from "./store/post-list-store";
let Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <>
      <div className="card-div">
        <div className="card card2" style={{ width: "60%" }}>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <TiDelete className="icon1" />
            <span className="visually-hidden">unread messages</span>
          </span>
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-text" style={{ color: "blue" }}>
              {post.tags.map((tag) => " #" + tag)}
            </p>
            <p className="card-text">{post.body}</p>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" />
            <div className="reactions">
              <h5>{post.reactions}</h5>
              <AiFillLike className="icon2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
