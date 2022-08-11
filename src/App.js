import './App.css';
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import Jobform from './Components/Jobform';
import Joblist from './Components/Joblist';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App" >
    <ul className="App">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/joblist">Joblist</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul> 
           <Routes>
                 <Route exact path='/' element={< Jobform />}></Route>
                 <Route exact path='/joblist' element={< Joblist />}></Route>                
          </Routes>
             </div>
    </Router>
  );
}

export default App;
