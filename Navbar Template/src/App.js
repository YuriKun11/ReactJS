import logo from './logo.svg';
import './App.css';

import NavBar from './component/jsxfolder/NavBar';

import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./component/jsxfolder/pages/Home";
import { About } from "./component/jsxfolder/pages/About";
import { Blog } from "./component/jsxfolder/pages/Blog";
import { Contact } from "./component/jsxfolder/pages/Contact";

function App() {
  return (
    <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
