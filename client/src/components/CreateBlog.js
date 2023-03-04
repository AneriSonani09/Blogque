import React, {useState} from 'react'

function CreateBlog() {
    const [picture, setPicture] = useState("");

  const onChangePicture = e => {
    console.log(e.taget.value);
    setPicture(e.target.value);
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
          <label>Banner Image URL</label>
          <input type="text" value = {picture} className="form-control" onChange={onChangePicture}/>
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
