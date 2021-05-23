import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <NavMenu />
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
