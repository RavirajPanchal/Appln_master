import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
//import { Add_Name } from './components/Add_Name';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Home } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
//import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';





import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
//import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import{ProSidebar,SidebarHeader} from "react-pro-sidebar"









const drawerWidth = 240;



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        /* width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`, */
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    /* ...theme.mixins.toolbar, */
    justifyContent: 'flex-end',
    marginTop:'10px'
}));








function NavSide() {

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [close, setclose] = useState(false);
    const [menudata, setMenudata] = useState("Add_Name");
    const [collapsed, setCollapsed] = useState(false);


    const styles = {
        sideBarHeight: {
          height: "100%",
        },
        menuIcon: {
          float: "left",
          margin: "10px",
        },
      };
      const onClickMenuIcon = () => {
        setCollapsed(!collapsed);
      };
    

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };







  return (

  <><Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" open={open} style={{marginTop:'200px'}}>
              <Toolbar >

                  <Typography variant="h6" noWrap component="div">
                      Application Master
                  </Typography>
              </Toolbar>
          </AppBar>

      </Box>


      <ProSidebar style={styles.sideBarHeight} collapsed={collapsed} sx={{paddingTop:"200px"}}>
      <SidebarHeader sx={{paddingTop:"250px"}}>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        {/* <MenuItem icon={<FaGem />}> Dashboard</MenuItem>
        <MenuItem icon={<FaGem />}>Users</MenuItem> */}
        <SubMenu title="Reports" icon={<FaHeart />}>
          {/* <MenuItem>Track Report</MenuItem>
          <MenuItem>Inventory Report</MenuItem>
          <MenuItem>Customer Report</MenuItem> */}
        </SubMenu>
        <SubMenu title="Account" icon={<FaHeart />}>
          <MenuItem>Permissions</MenuItem>
          <MenuItem>Settings</MenuItem>
        </SubMenu>
        <SubMenu title="Email" icon={<FaHeart />}>
          <MenuItem>Notification</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  








      {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          style={{ marginTop: "100px" }}
          
          


          sx={{ mr: 2, ...(open && { display: 'none' }) }}
      >
              <MenuIcon />
          </IconButton>
          <Drawer

              sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                      width: drawerWidth,
                      boxSizing: 'border-box',
                  },
              }}
              variant="persistent"
              anchor="top"
              open={open}
          >
              <DrawerHeader>
                  <IconButton onClick={handleDrawerClose}>
                      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
              </DrawerHeader>
              <Divider />
              <List>

                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemIcon>
                              <HomeIcon />
                             
                              <Link href='/'>


                                  = Home =
                              </Link>
                          </ListItemIcon>


                      </ListItemButton>
                  </ListItem>


                  <ListItem disablePadding onClick={() => setMenudata("Add_Name")}>
                      <ListItemButton>
                          <ListItemIcon>
                              <AddCircleIcon />



                              <Link href='AddName'>
                                  
                                  = Add_Name =


                              </Link>

                          </ListItemIcon>
                          
                      </ListItemButton>
                  </ListItem>





                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemIcon>
                              <AddCircleIcon />
                              <Link href='Register'>
                                  =Register=
                              </Link>
                          </ListItemIcon>
                      </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemIcon>
                              <AddCircleIcon />
                              <Link href='Post_add'>
                                  =Post_add=
                              </Link>
                          </ListItemIcon>
                      </ListItemButton>
                  </ListItem>


                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemIcon>
                              <AddCircleIcon />
                              <Link href='Data_post'>
                                  =Data_post=
                              </Link>
                          </ListItemIcon>
                      </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemIcon>
                              <AddCircleIcon />
                              <Link href='Check_add'>
                                  =Check_add=
                              </Link>
                          </ListItemIcon>
                      </ListItemButton>
                  </ListItem>




              </List>
              <Divider />

          </Drawer><Main open={open}>
        //<DrawerHeader />

          </Main><Box>
              {menudata == "Add_Name"}

          </Box> */}
          
          </>
        
  //);
        )};








export default NavSide