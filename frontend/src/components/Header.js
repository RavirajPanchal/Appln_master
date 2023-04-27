import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Tab, Tabs, Button, useMediaQuery, useTheme } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import DrawerComp from './DrawerComp';
//import Typography from '@mui/material/Typography';
//import { Typography } from "@mui/material";
import Typography from '@mui/material/Typography';

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#fff" }}>
        <Toolbar>
           
        <Typography variant="h6" noWrap component="div" className="App-header1">
                        Application Master
                    </Typography>

           <Tabs 
             textColor="inherit"
             value={value}
             onChange={(e, value) => setValue(value)} indicatorColor="secondary">
              {/* <li><Link to="/reg">PRODUCTS</Link></li> */}
              {/* <li><Link to="/services">SERVICES</Link></li>
              <li><Link to="/contact us">CONTACT US</Link></li>
             <li><Link to="/about us">ABOUT US</Link></li> */}
             {/* <li><Link to="/profile">Profile</Link></li> */}
             {/* <Tab label="PRODUCTS" />
             <Tab label="SERVICES" />
             <Tab label="CONTACT US" />
             <Tab label="ABOUT US" /> */}
           </Tabs>

           <Button sx={{ marginLeft: "auto"  }}  variant="contained" >
             Logout{" "}
           </Button>
           
        </Toolbar>
        {/* <DrawerComp/> */}
      </AppBar>
    </React.Fragment>
  )
}

export default Header;