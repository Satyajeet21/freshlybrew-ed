import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import ReactBlog from './components/ReactBlog';
import Projects from './components/Projects';
import AngularBlog from './components/AngularBlog';
import { FaAngular } from 'react-icons/fa';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element ={<Layout />} >
      <Route index element ={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route path="/portfolio" element={<Projects />} />
      <Route path="/angularBlog" element={<AngularBlog/>} />
      <Route path="/reactBlog" element={<ReactBlog />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
