import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

let postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.Payload.postId
    );
    console.log("post id is :" + action.Payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.Payload, ...currentPostList];
  }
  return newPostList;
};
let PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTS
  );

  const addPost = (userId, title, postBody, tags, reaction) => {
    dispatchPostList({
      type: "ADD_POST",
      Payload: {
        id: new Date().getTime(),
        title: title,
        body: postBody,
        userId: userId,
        reactions: reaction,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      Payload: {
        postId: postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POSTS = [
  {
    id: "1",
    title: "Going to college",
    body: "Today my first day in my college i enjoy alot and i met with my class fellow for the first time",
    userId: "user-01",
    reactions: 5,
    tags: ["college", "school", "study"],
  },
  {
    id: "2",
    title: "Going to city",
    body: "we went to city yesterday and we had enjoyed a lot and we also bought some accessories for home",
    userId: "user-02",
    reactions: 15,
    tags: ["peshawar", "city", "enjoy"],
  },
];
export default PostListProvider;
