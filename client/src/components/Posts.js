import React from 'react'
import Post2 from './Post2'

function Posts() {
  return (
    <div>
      <section class="recent-posts container">
	    <div class="section-title">
		    <h2><span>All Stories</span></h2>
	    </div>
	    <div class="card-columns listrecent">
            <Post2/>
        </div>
      </section>
    </div>
  )
}

export default Posts
