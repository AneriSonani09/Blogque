import React from 'react'

function Signup() {
  return (
    <div>
      <form class="container">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <br></br>
        <p className="text-center">
          <Link class="nav-link" to="/login">Create New Account</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup
