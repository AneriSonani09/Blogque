import React from 'react'
import Post1 from './Post1'

function Featured() {
  return (
    <div>
      <section class="featured-posts container">
	    <div class="section-title">
		    <h2><span>Featured</span></h2>
	    </div>
	    <div class="card-columns listfeaturedtag">
            <Post1 />
            <Post1 />
        </div>
	</section>
    </div>
  )
}

export default Featured
