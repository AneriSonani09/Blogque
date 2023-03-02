import React, {useState} from 'react'

function CreateBlog() {
    const [picture, setPicture] = useState(null);

  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files[0]);
      setPicture(e.target.files[0]);
    }
  };

  return (
    <div>
      <form class="container">
        <h3 className='card-title'>Create a new Blog</h3> <br />
        { picture && <img alt="Blog Banner" src={picture} />}    
        <div className="mb-3">
          <label>Blog Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Banner Image</label>
          <input type="file" className="form-control" onChange={onChangePicture}/>
        </div>
        <div className="mb-3">
          <label>Tell your story ... </label>
          <input type="textarea" className="form-control" />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateBlog
