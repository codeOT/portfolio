import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Blogs from './pages/blogs/Blogs'
import Contact from './pages/contact/Contact'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
