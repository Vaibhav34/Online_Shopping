import React from "react";
import axios from "axios";
import { PropTypes } from 'react'
import {Grid, Avatar, Paper, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { FormControlLabel } from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';

import {withRouter} from './History';
import Checkbox from '@material-ui/core/Checkbox';

import {Outlet} from 'react-router-dom';

import PersonIcon from '@mui/icons-material/Person';

// axios.defaults.withCredentials = true
const backEndUrl = "http://localhost:8080"
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: "",
          password: "",
          logged : false,
          message : "",
          userVar:{}
        };
        console.log(this.props);
        this.onChangeuserName = this.onChangeuserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeuserName(e) {
        this.setState({
            userName: e.target.value
          });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
          });
    }
    
    async onSubmit(e) {
      
        e.preventDefault();
        // alert(this.state.userName + " " + this.state.password);
        try {
            

            let res = await axios.post(backEndUrl + "/user/loginpage", {
                userName: this.state.userName,
                password: this.state.password,
            })
            this.setState({message:res.data})
            console.log(res.data);
            // if(this.state.userName==="" && this.state.password===""){
            //     //this.props.history(`/profile/${this.state.userName}`);
            //   //console.log("trryyyyyy")  
            // }
            if(res.data === "Sucessfully Logged In"){
                this.props.history(`/profile/${this.state.userName}`);
            }
            

            axios.get(`http://localhost:8080/getUserByName/${this.state.userName}`).then((res)=>{
                    this.setState({userVar
                    :res.data})
            })

        } catch (err) {
            console.log(err)
            if (err.response.status == 404) {
                // alert(err.response)
                this.setState({message:err.response.data});
            //    this.setState({message:" Invalid credentials"})

                // alert(err.response.data)
                // window.location.reload();
             }
             this.setState({message:err.response.data});

        } finally {
            //alert("stop");
        }
    }

    render() {
        const paperStyle={padding:20,height:'70vh',width:300,margin:"0 auto"}
        const avatarStyle={backgroundColor:'#1bbd7e'}
        const btnstyle={margin:'8px 0'}
        
        return (
            <Grid className='login'>


<Paper elevation={10} style={paperStyle}>
                <Grid  align='center' justify-content='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>

                </Grid>
                <form onSubmit={this.onSubmit}>

                    
                <br/>{this.state.message}<br/><br/>

                <TextField label="username" value={this.state.userName} onChange={this.onChangeuserName} id="userName" type="text" className="form-control" placeholder="Enter userName" fullWidth required/>
                <TextField label="password" value={this.state.password} onChange={this.onChangePassword} id="password" type="password" className="form-control" placeholder="Enter password" fullWidth required/>
                <FormControlLabel
                control={
                <Checkbox
                name='chakedB'
                color='primary'
                />
                }
                label='Remember me'
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign In</Button>
                <Typography>
                    <Link to="/" >
                        Forgot password ?

                    </Link>
                </Typography>
                <Typography> Do you have an account ?
                   
                    <Link to="/registration" >
                        Sign Up?

                    </Link>

                   
        
                   
                </Typography>

                
                </form>
                
                
    
    
            </Paper>















            {/* <form onSubmit={this.onSubmit}>
                
                <h3>Log in</h3>

                <div className="form-group">
                    <label><PersonIcon/> User</label>
                    <input value={this.state.userName} onChange={this.onChangeuserName} id="userName" type="text" className="form-control" placeholder="Enter userName" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.onChangePassword} id="password" type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>

                 <Outlet/>       
                <br/>{this.state.message}



            </form> */}
            </Grid>

        );
    }
}

export default withRouter(LoginPage);