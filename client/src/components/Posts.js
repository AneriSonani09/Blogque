import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post2 from './Post2';

function Posts() {
  const [ fblogs, setBlogs ] = useState([]);

  const getFeaturedBlgs = () => {
    axios.get('https://localhost:7263/api/BlogPosts')
    .then((response) => {
      console.log(response.data);
      setBlogs(response.data);
      console.log("Dhr");
      console.log(fblogs);
    })
    .catch((err) =>{
      console.log(err);
    })
  }
  useEffect(() => {
    getFeaturedBlgs();
  }, [])

  return (
    <div>
      <section class="recent-posts container">
	    <div class="section-title">
		    <h2><span>All Stories</span></h2>
	    </div>
	    <div class="card-columns listrecent">
          {fblogs && fblogs.map((i) => {
            return (
            <Post2 id={i.id} key={i.id} />
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default Posts
