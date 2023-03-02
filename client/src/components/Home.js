import React from 'react'
import NavBar from './NavBar'
import Featured from './Featured'
import Posts from './Posts'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <NavBar />
      <Featured />
      <Posts />
      <Footer />
    </div>
  )
}

export default Home
