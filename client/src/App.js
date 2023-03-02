import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';
import Login from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="create" element={ <CreateBlog/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
    </>
  );
}

export default App;
