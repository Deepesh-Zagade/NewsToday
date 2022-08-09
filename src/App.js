
// import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  
  render() {

    return (
      <div>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" country='in' pagesize={18} category='general' />} />
          <Route path="/business" element={<News key="business" country='in' pagesize={18} category='business' />} />
          <Route path="/entertainment" element={<News key="entertainment" country='in' pagesize={18} category='entertainment' />} /> 
          <Route path="/health" element={<News key="health" country='in' pagesize={18} category='health' />}/> 
          <Route path="/science" element={<News key="science" country='in' pagesize={18} category='science' />} />
          <Route path="/sports" element={<News key="sports" country='in' pagesize={18} category='sports' />} />
          <Route path="/technology" element={<News key="technology" country='in' pagesize={18} category='technology' />} />
        </Routes>
        </Router>
      </div>
    )
  }
}



