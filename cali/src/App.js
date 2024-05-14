import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Home';
import Aboutus from './components/Aboutus';
import Enq from './components/Enq';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/Aboutus'element={<Aboutus/>}></Route>
        <Route path='/Enq'element={<Enq/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
