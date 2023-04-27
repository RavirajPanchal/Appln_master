import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
//import Link from '@mui/material/Link';
import { path } from 'react-router-dom';
import { Button } from '@mui/material';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import {TreeView} from '@mui/lab';
import {TreeItem} from '@mui/lab'





const Navbar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
       /* {
            path:"/dashboard",
            name:"Dash",
            icon:<FaTh/>
        }, */

        {
          path:"/",
          name:"Home",
          icon:<HomeIcon/>
      },
        
        
        {
          path:"/Reg_App",
          name:"Register App",
          icon:<AddCircleIcon />
      },


      {
        path:"/Reg_All_Data",
        name:"Register All",
        icon:<AddCircleIcon />

        
    },


        

       /*  {
            path:"/",
            name:"Register App",
            icon:<AddCircleIcon />
        }, */


        {
            path:"/register",
            name:"About",
            icon:<FaUserAlt/>
        },
        /* {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        } */
    ]
    return (
      <div className="container">   
        <div style={{width: isOpen ? "200px" : "50px" }} className="sidebar"> 
           <div className="top_section">
              {/* <h1 style={{display: isOpen ? "block" : "none" }} className="logo">Logo</h1> */}
              <div style={{marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                <Button className='menuBtn' onClick={toggle} style={{marginLeft:90}}>
                {isOpen? <MenuOpenIcon style={{color:'black'}} />: <MenuIcon style={{marginLeft:-230, color:'black'}}/>}
                </Button>
                {/* <MenuIcon onClick={toggle}/> */}




                <TreeView>
                            <TreeItem nodeId="1" label={
                                <ListItem button component="a" href="#">
                                    <ListItemText primary="Home" />
                                </ListItem>}>
                            </TreeItem>
                            <TreeItem nodeId="2" label={
                                <ListItem button component="a" href="#">
                                    <ListItemText primary="Data Structures" />
                                </ListItem>}>
                                <TreeItem nodeId="6" label={
                                    <ListItem button component="a" href="#">
                                        <ListItemText primary="Arrays" />
                                    </ListItem>}>
                                </TreeItem>
                                <TreeItem nodeId="7" label={
                                    <ListItem button component="a" href="#">
                                        <ListItemText primary="Linked List" />
                                    </ListItem>}>
                                </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="3" label={
                                <ListItem button component="a" href="#">
                                    <ListItemText primary="Algortihms" />
                                </ListItem>}>
                                <TreeItem nodeId="8" label={
                                    <ListItem button component="a" href="#">
                                        <ListItemText primary="Searching" />
                                    </ListItem>}>
                                </TreeItem>
                                <TreeItem nodeId="9" label={
                                    <ListItem button component="a" href="#">
                                        <ListItemText primary="Sorting" />
                                    </ListItem>}>
                                </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="4" label={
                                <ListItem button component="a" href="#">
                                    <ListItemText primary="Languages" />
                                </ListItem>}>
                                <TreeItem nodeId="10" label={
                                    <ListItem button component="a" href="#">
                                        <ListItemText primary="C++" />
                                    </ListItem>}>
                                </TreeItem>
                                <TreeItem nodeId="11" label={
                                    <ListItem button component="a" href="#">
                                        <ListItemText primary="Java" />
                                    </ListItem>}>
                                </TreeItem>
                                <TreeItem nodeId="12" label={
                                    <ListItem button component="a" href="#">
                                        <ListItemText primary="Python" />
                                    </ListItem>}>
                                </TreeItem>
                                <TreeItem nodeId="13" label={
                                    <ListItem button component="a" href="#">
                                        <ListItemText primary="JavaScript" />
                                    </ListItem>}>
                                </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="5" label={
                                <ListItem button component="a" href="#">
                                    <ListItemText primary="GBlog" />
                                </ListItem>}></TreeItem>
                        </TreeView>


              
                
              </div>
           </div>
           {
            menuItem.map((item, index) =>(
              <NavLink to={item.path} key={index} className="link" activeclassName='active'>
                <div className="icon">{item.icon}</div>
                <div style={{display: isOpen ? "block" : "none" }}className="link_text">{item.name}</div>
              </NavLink>
            ))
           }
        </div>
        <main>{children}</main>
      </div>
    );
  };
  
  export default Navbar;
  
