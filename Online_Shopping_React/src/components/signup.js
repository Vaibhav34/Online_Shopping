import React from 'react'
import { Avatar, Grid, Paper, TextField, Typography,Button, Checkbox } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon  from '@material-ui/icons/AddCircleOutlineOutlined';
//import {Helmet} from 'react-helmet';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const Signup=()=>{
  const paperStyle={padding:'30px 20px',width:300,margin:"20px auto"}
  const headerStyle={margin:0}
  const avatarStyle={backgroundColor:'green'}
  const marginTop={marginTop:5}
  return (
    <Grid className='Signup'>
      
      {/* <Helmet>
                <style>{'body { background:url(https://images.unsplash.com/photo-1538438253612-287c9fc9217e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80); }'}</style>
                
            </Helmet> */}
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon/>

          </Avatar>
        <h2 style={headerStyle}>Sign Up</h2>
        <Typography variant='caption' gutterBottom>Please fill this form to create a crops Details !</Typography>


        </Grid>
        <form>
          <TextField fullWidth label='Name' placeholder='Enter your name'/>
          <TextField fullWidth label='Place' placeholder='Enter your place'/>
          <FormControl component="fieldset" style={marginTop}>
      
      
    </FormControl>
          <TextField fullWidth label='Mobile Number'/>
          <TextField fullWidth label='Password'/>
          <TextField fullWidth label='Role'/>
          
          <FormControlLabel
          control={<Checkbox name='checkedA'/>}
          label="I accept the terms and conditions."
          />
          <Button type='Submit' variant='contained' color='primary'>Submit</Button>
          

        
        </form>
        
      </Paper>
    </Grid>
    

    
      
    
  )
}

export default Signup

