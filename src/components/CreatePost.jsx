import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "./store/post-list-store";

let CreatePost = () => {
  const { addPost } = useContext(PostList);

  let userIdElement = useRef();
  let titleElement = useRef();
  let postBodyElement = useRef();
  let tagsElement = useRef();
  let reactionsElement = useRef();

  let handleForm = (event) => {
    event.preventDefault();
    let userId = userIdElement.current.value;
    let title = titleElement.current.value;
    let postBody = postBodyElement.current.value;
    let tags = tagsElement.current.value.split(" ");
    let reactions = reactionsElement.current.value;
    addPost(userId, title, postBody, tags, reactions);
  };

  return (
    <>
      <form className="form1" onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your User Id
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={titleElement}
            type="text"
            className="form-control"
            id="postTitle"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            rows="4"
            type="text"
            className="form-control"
            id="pcontent"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Hashtags
          </label>
          <input
            ref={tagsElement}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter tags using spaces"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Reactions
          </label>
          <input
            ref={reactionsElement}
            type="text"
            className="form-control"
            id="reactions"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
