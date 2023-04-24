
import './App.css';
import React, { useState } from 'react';
//import Drawercomp from './Drawercomp';
import { Drawer,List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
//import  { Router,Route } from '@mui/icons-material';
import NavSide from './components/NavSide';

//import {BrowserRouter ,Routes } from 'react-router-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Register_App from './components/Register_App';
import Dashboard from './components/Layout/Dashboard';
import { path } from 'react-router-dom';



//import { Add_Name } from './components/Add_Name';
//import Register_App from './components/Register_App';
//mport Register from './components/Register';
//import { Add } from '@mui/icons-material';
//import Post_add from './components/Post_add';
//import Data_post from './components/Data_post';
//import Check_add from './Check_add';

 
function App() {


  return(
  // <>

  // <div>
  //   <NavSide />
  // </div>

  // </>
 <BrowserRouter>

{/*  <div> */}
 {/* <NavSide/> */}

 
 <Header/>
 <Navbar>
 
  <Routes>
    <Route path="/" />

    <Route path="/register" element={<Register_App/>}/>

    <Route path='/dashboard' element={<Dashboard/>}/>
    
    {/* <Route path="/AddName" element={<Add_Name/>}/> */}
    {/* <Route path="/Home" element={<NavSide/>}/> */}
    {/* <Route path='/Register' element={<Register/>}/> */}
    {/* <Route path='/Post_add' element={<Post_add/>}/> */}
    {/* <Route path='/Data_post' element={<Data_post/>}/> */}
    {/* <Route path='/Check_add' element={<Check_add/>}/> */}
    


  </Routes>
  </Navbar>

  
{/*  </div> */}
 </BrowserRouter>
  
  

 );
}

export default App;

