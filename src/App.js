import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';   
import Postlist from './component/Postlist';
import AddPostForm from './component/AddPostForm';
import SinglePost from './component/SinglePost';
import PostEdit from './component/PostEdit';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Postlist />} />
          <Route exact path="/postform" element={<AddPostForm />} />
          <Route exact path="/posts/:postID" element={<SinglePost />} />
          <Route exact path="/editpost/:postID" element={<PostEdit />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

