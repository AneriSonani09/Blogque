import { Routes, Route } from "react-router-dom"
import CreateBlog from './components/Blogs/CreateBlog';
import Posts from './components/Blogs/Posts';
import Login from './components/Authentication/Login';
import Signup from "./components/Authentication/Signup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Posts/> } />
        <Route path="create" element={ <CreateBlog/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="signup" element={ <Signup/> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
