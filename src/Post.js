import React, {useState, useEffect} from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";

function Post({postId, username, caption, imageUrl }) {
  
const [comments, setComments] = useState([])
const [comment, setComment] = useState('')


// This useEffect is listening for anytime comments change in the db and when they do the state of comments is updated 
useEffect(() => {
  let unsubscribe;
  if (postId) {
    unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
  }

  return () => {
    unsubscribe();
  };
}, [postId]);

const postComment = (event) => {

}

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />

        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt=""></img>

      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>


      <form className="post__commentBox">

        <input
        className="post__input"
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        >
        </input>

        <button
        className="post__button"
        disabled={!comment}
        type="submit"
        onClick={postComment}
        >Post</button>
      </form>
    </div>
  );
}

export default Post;
  