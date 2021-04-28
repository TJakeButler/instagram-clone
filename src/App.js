import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
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

      <Post></Post>
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
