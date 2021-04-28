import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Jake",
      caption: "Love pugs!",
      imageUrl:
        "https://www.thesprucepets.com/thmb/lqDqQz52oagIxea9ptgY1xzXQW4=/2121x1414/filters:fill(auto,1)/Pug-GettyImages-1140575734-5262294c43ff4ec993395d780fb0ee16.jpg",
    },

    {
      username: "Sally",
      caption: "Corgis are the best!",
      imageUrl:
        "https://cdn.buttercms.com/ZF8K2t8hT8OoNR3W42bX",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
          className="app_headerImage"
        />
      </div>
      <h1>Hello, welcome to Instagram Clone Built with React</h1>

     {
       posts.map(post => (
         <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
       ))
     }
    </div>
  );
}

export default App;
