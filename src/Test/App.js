import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import About from './About';
  
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<About />} />
        <Route path='/annual' element={<About />} />
        <Route path='/team' element={<About />} />
        <Route path='/blogs' element={<About />} />
        <Route path='/sign-up' element={<About />} />
      </Switch>
    </>
  );
}
  
export default App;