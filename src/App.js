// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './styling/side-top-nav-bars.css';
import { Link } from "react-router-dom";



// import SideBar from './components/side-top-nav-bars';
// import './styling/campus.css';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import SideBar from './components/side-top-nav-bars';
import NavSidebar from './components/side-top-nav-bars';
import BodySec from './components/body-section';
import './styling/body-section.css';
import Campus from './components/Campus';
import { MoveDiagonal } from 'lucide-react';
// import Modal from './components/view';
import View from './components/view';
import './styling/view.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route  path="/"  element={<BodySec/>}/>
        {/* <Route path="/bodysec" element={<BodySec/>}/> */}
        <Route path ="/Campus" element={<Campus/>}/>
        <Route path ="/view" element={<View/>}/>

        
      </Routes>
    </BrowserRouter>



    
     </>
  );
}

export default App;
