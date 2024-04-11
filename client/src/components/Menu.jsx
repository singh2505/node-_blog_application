import React, { useState, useEffect } from "react";
import axios from "axios";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h2>Recommended Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img src={`../upload/${post.img}`} alt="post cover" />
            <h3>{post.title}</h3>
            <button>
              <a href={`/post/${post.id}`}>Read More</a>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
