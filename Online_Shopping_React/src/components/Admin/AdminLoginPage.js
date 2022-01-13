import React from "react";
import axios from "axios";
import { PropTypes } from 'react'
import {useHistory} from 'react-router-dom'

import {withRouter} from '../History';
import PersonIcon from '@mui/icons-material/Person';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import {Outlet} from 'react-router-dom';

// axios.defaults.withCredentials = true
const backEndUrl = "http://localhost:8080"
class AdminLoginPage extends React.Component {
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
            if(res.data === "Sucessfully Logged In"){
                // this.props.history(`/profile/${this.state.userName}`);
                this.props.history(`/admin`);
            }
            // window.location.href="/"
            
            // this.setState({message:"Welcome "+this.state.userName})
            

            // this.props.history(`/profile/${this.state.userName}`);




            // alert("Welcome, " + this.state.userName);
            // localStorage.setItem("userName", res.data.userName);
            // localStorage.setItem("logged", "true");
            // localStorage.setItem("role", res.data.authorities[0].authority.replace("ROLE_", ""));
            // window.location.href="/";
            // let stateuserName = this.state.userName;
            // this.props.history.push("/mata");

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
        
        return (
            <form onSubmit={this.onSubmit}>
                
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



            </form>

        );
    }
}

export default withRouter(AdminLoginPage);