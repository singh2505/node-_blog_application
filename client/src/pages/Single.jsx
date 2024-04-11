import React, { useContext, useEffect, useState } from "react";
import EditImage from "../images/edit.png";
import DeleteImage from "../images/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});

  // The useLocation hook returns the current location object, which contains information about the current URL.
  const location = useLocation();
  // The useNavigate hook returns a navigate function that can be used to navigate to a new location.
  const navigate = useNavigate();

  // Extract the post ID from the current URL.
  const postId = location.pathname.split("/")[2];

  // Get the current user from the AuthContext.
  const { currentUser } = useContext(AuthContext);

  // Use the useEffect hook to fetch the blog post data from the server when the component mounts.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  // Handler function for deleting a blog post.
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      // Navigate to the home page after deleting the post.
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Helper function to extract plain text from an HTML string.
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  // Render the blog post.
  return (
    <div className="single">
      <div className="content">
        {/* Render the post image. */}
        <img src={`../upload/${post?.img}`} alt="post cover" />
        <div className="user">
          {/* Render the user image if it exists. */}
          {post.userImg && <img src={post.userImg} alt="user" />}
          <div className="info">
            {/* Render the post author and date. */}
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {/* Render the edit and delete buttons if the current user is the author of the post. */}
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={EditImage} alt="edit" />
              </Link>
              <img onClick={handleDelete} src={DeleteImage} alt="delete" />
            </div>
          )}
        </div>
        {/* Render the post title and description. */}
        <h1>{post.title}</h1>
        <i>"{getText(post.desc)}"</i>
        <p>
        Sincerely Jules is a popular fashion and lifestyle blog with a gorgeous design. Her blog homepage begins by displaying a full-width header image of the latest blog post and a link to read the article.

There’s also a navigation menu in the top-left corner and links to her social media platforms are displayed vertically on the right-side.

As you scroll down the page, more of her latest blog posts are presented in a grid with large, eye-catching thumbnails. 

At the bottom of the page, Jules has embedded her Instagram feed.
        </p>
        <p>
        The TED Blog has a professional web design and layout that’s perfect for news blogs and websites. 

The full-width header image at the top of the page promotes your featured article. Under the blog post title and description, there’s a call to action button to encourage visitors to read the post. 

Underneath that section, visitors can scroll through all of the latest articles on the blog.
        </p>
        <p>
          Ut eu sem integer vitae. Aliquam vestibulum morbi blandit cursus risus
          at. Convallis aenean et tortor at risus viverra adipiscing at. Sit
          amet dictum sit amet justo donec enim. Nulla aliquet porttitor lacus
          luctus accumsan tortor. Ultrices mi tempus imperdiet nulla malesuada
          pellentesque elit eget gravida. Dui sapien eget mi proin sed. Urna
          nunc id cursus metus aliquam eleifend mi in. Euismod quis viverra nibh
          cras pulvinar mattis. Consequat nisl vel pretium lectus quam id leo in
          vitae. Turpis egestas integer eget aliquet nibh praesent tristique
          magna. Dui accumsan sit amet nulla facilisi. Risus ultricies tristique
          nulla aliquet enim tortor at auctor.
        </p>
        <p>
        A great homepage is crucial for any site, and blogs are no exception. Your homepage is the central point of your blog. Designed properly, it meets the three major purposes of such pages: catch visitors’ attention, educate them on your company, and tempt them into accessing other pages.

Make the page simple enough to serve the above-mentioned purposes. Spend as much time as you need on thinking about its design and content. Don't rush things. The result must be a careful decision, not a half-baked idea. Only in this case, you'll come up with something memorable.
        </p>
      </div>
      {/* Show related categories. */}
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
