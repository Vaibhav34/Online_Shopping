import { Button } from 'bootstrap';
import ProductList from './User/UserProductList';
import React, { Component } from 'react';
import RegisterPage from './RegisterPage';
import { Link } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import { Navbar } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Signup from './signup';
//import Product from '../prod';


function BaseLocation(){

    return <div className='App' >
       {/* <Product/> */}
        <h1>Apna Bazaar</h1> 
       
        {/* <AppBar> */}
        <Navbar bg="light" expand="lg">
        <Link to='/registration' style={{textDecoration: 'none'}}><PersonIcon/> Customer</Link>
        {/* <Link to='/admin'> Admin</Link> */}
        <Link to='/adminlogin' style={{textDecoration: 'none'}}><AdminPanelSettingsIcon/>Admin</Link> 
        </Navbar>
        
        <div>
            {<ProductList/>}
        </div>  
        </div>

    //         <AppBar position='fixed' className={classes.appBar} color='inherit'>
    //     <Toolbar>
    //         <Typography variant='h6' className={classes.title} color='inherit'>

    //         </Typography>
    //     </Toolbar>
    // </AppBar>
    
}
export default BaseLocation;