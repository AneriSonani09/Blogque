import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Blog.css';

function Blog() {
    const id = localStorage.getItem("blogDetail")
    const [blog,setBlog] = useState("");

    const getBlogDetails = () => {
		axios.get(`https://localhost:7079/api/BlogPosts/${id}`)
		.then((response) => {
		  setBlog(response.data);
          console.log("Blog details");
          console.log(response.data);
		})
		.catch((err) =>{
		  console.log(err);
		})
	}

    useEffect(() => {
		getBlogDetails();
	}, [])

    localStorage.removeItem('blogDetail');
    
  return (
    <div className="blog-page-container">
      <h1 className="blog-title">{blog.title}</h1>
      <img
        className="banner-image"
        src={blog.imageURL}
        alt="Banner Image"
      />
      <div className="blog-content">
        <p> {blog.content}</p>
      </div>
      <div className="author-container">
        <p className="author-name">Published By <span>Author Name</span></p>
      </div>
    </div>
  )
}

export default Blog
