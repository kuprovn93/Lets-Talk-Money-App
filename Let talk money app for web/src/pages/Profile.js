import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import { TextField, Button } from '@material-ui/core';
import firebase from 'firebase';

import "../App.css";


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: auth().currentUser,
          error: null,
          fname: '',
          email: '',
          password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        // this.myRef = React.createRef();
      }

      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        try {
            var credential = firebase.auth.EmailAuthProvider.credential(this.state.email, this.state.password);
            auth().currentUser.linkWithCredential(credential)
                .then((usercred) => {
                    var user = usercred.user;
                    user.updateProfile({displayName:this.state.fname});
                    const usersRef = firebase.firestore().collection('Users');
                    usersRef.doc(`${user.uid}`).set({
                        FirstName: this.state.fname,
                        LastName: this.state.fname,
                        Email: user.email,
                        UserRole: "Customer",
                        RegisteredOn: new Date().toLocaleString() + ''
                    });

                    console.log("Anonymous account successfully upgraded", user);
                    window.location.reload(false);
                }).catch((error) => {
                    console.log("Error upgrading anonymous account", error);
                });
        } catch (error) {
          this.setState({ error: error.message , fname: '', email: '', password: '',});
        }
      }
  

  render() {
  

    return (
        
          // <div style={{ backgroundImage: `url(${background})` }}>
          <div id="login-page">
            
     

          <div id="login-card" className= "home-card">
          <Header className="App-header"></Header>
          
            <div  style = {{}}>
            
              <h1 class = "form-element">Welcome to SocialBoard</h1>
              <h3>My Profile</h3>
              <h4>UserName - {this.state.user.displayName}</h4>
              <h4>Email Id - {this.state.user.email}</h4>
            

              {auth().currentUser.email
            ? <div className="nav-item">
              
            </div> 
            : 
            <div>
            <form 
            className="form" 
            onSubmit={this.handleSubmit}
            >
              <p className="lead">
              Connect your SocialBoard account Below.</p>
          
          <div className="form-element">
            <TextField className="form-control" 
            name="fname" 
            placeholder="User Name"  
            onChange={this.handleChange} 
            value={this.state.fname} 
            type="text"></TextField>
          </div>

          <div className="form-element">
            <TextField
            className="form-control" 
            placeholder="Email" 
            name="email" 
            
            onChange={this.handleChange} 
            value={this.state.email}>
            </TextField>
          </div>

          <div className="form-element">
            <TextField className="form-control" 
            placeholder="Password" 
            name="password" 
            onChange={this.handleChange} 
            value={this.state.password} 
            type="password"></TextField>
          </div>
          <div className="form-element">
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <Button variant="contained" color="primary" type="submit">Connect My Account</Button>
          </div>
          </form>
            </div>
            }
            </div>
            <Footer></Footer>
          </div>
          </div>
        
    )
  }
}