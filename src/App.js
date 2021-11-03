import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import SmoothScrollbar from './components/SmoothScrollbar';

export default function App() {
  return (
    <>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <NavMenu />
        <ScrollToTop />
        <Routes>
          <Route path="/Portfolio/about">
            <About />
          </Route>
          <Route path="/Portfolio/contact">
            <Contact />
          </Route>
          <Route path="/Portfolio/projects">
            <Projects />
          </Route>
          <Route exact path="/Portfolio">
            <Home />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
