import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TextareaAutosize } from '@mui/material';
import axios from 'axios';



export default function Reg_App() {
    const [appln,setappln] = useState('');
    const [Appln_Description,setAppln_Description] = useState('');
    const [OS,setOS] = useState('');
    const [OS_Version,setOS_Version] = useState('');
    const [Appln_Type,setAppln_Type] = useState('');
    const [Front_End,setFront_End] = useState('');
    const [greeting, setGreeting] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5002/post1',{appln,Appln_Description,OS,OS_Version,Appln_Type,Front_End});
          setGreeting(response.data.greeting);
        } catch (error) {
          console.error('Error:', error);
        }
      };


            
            
          
  return (
     <Container component="main" maxWidth="xl">
      {/* <CssBaseline /> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}
      >

        <Typography component="h1" variant="h5">
         Register
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0, alignItems:'left'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Typography component="h6">
      Application Name
        </Typography>
              <TextField 
                autoComplete="given-name"
                name="appln"
                required
                fullWidth
                id="appln"
                input type="text" 
                value={appln} 
                onChange={(e) => setappln(e.target.value)}
                autoFocus
              />
            </Grid>
            
            <div className="form-column" style={{ "padding": "10px", "padding-top":"7px"}}>
                                    <Grid item>
                                        <Box sx={{ flexDirection: 'column', display: 'flex',marginTop:0.5}}>
                                            <Typography fontSize={15}>
                                                Description 
                                            </Typography>
                                            <TextareaAutosize name="Appln_Description" 
                                             style={{ width: '35.1vw', height: '25.4vh' }}
                                             id="Appln_Description"
                                             input type="text"
                                             value={Appln_Description}
                                             onChange={(e) => setAppln_Description(e.target.value)}

                                            >
                                            </TextareaAutosize>
                                            
                                        </Box>
                                    </Grid>
                                </div>

        <Grid item xs={12} sm={3} sx={{marginTop:-14}} >
            <Typography component="h6">
    OS
        </Typography>
              <TextField
                autoComplete="given-name"
                name="OS"
                required
                fullWidth
                id="OS"
                autoFocus
                input type="text"
                value={OS} 
                onChange={(e) => setOS(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={3} sx={{marginTop:-14}} >
            <Typography component="h6">
            OS_Version
        </Typography>
              <TextField
                autoComplete="given-name"
                name="OS_Version"
                required
                fullWidth
                id="OS_Version"
                autoFocus
                input type="text"
                value={OS_Version} 
                onChange={(e) => setOS_Version(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
            <Typography component="h6">
      Application Type
        </Typography>
              <TextField
                autoComplete="given-name"
                name="Appln_Type"
                required
                fullWidth
                id="Appln_Type"
                autoFocus
                input type="text" 
                value={Appln_Type} 
                onChange={(e) => setAppln_Type(e.target.value)}
              />
            </Grid>


            <Grid item xs={12} sm={4} >
            <Typography component="h6">
           Front_End  
        </Typography>
              <TextField
                autoComplete="given-name"
                name="Front_End"
                required
                fullWidth
                id="Front_End"
                autoFocus
                input type="text" 
                value={Front_End} 
                onChange={(e) => setFront_End(e.target.value)}
              />
            </Grid>
            
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            submit
          </Button>
        </Box>
      </Box>
      {greeting && <p>{greeting}</p>}
    </Container> 
  )
}


