import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import GoogleAds from '../components/GoogleAds';
import AdSense from 'react-adsense';

import "../App.css";


export default class HomePage extends Component {
  

  render() {
  

    return (
        
          // <div style={{ backgroundImage: `url(${background})` }}>
          <div id="login-page">
            
     

          <div id="login-card" className= "home-card">
          <Header className="App-header"></Header>
          {/* <AdMobBanner
  adSize="fullBanner"
  adUnitID="your-admob-unit-id"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/> */}
            <div  style = {{}}>
            
              <h1 class = "form-element">Welcome to SocialBoard &#128512;</h1>
              <h2 class="form-element" variant="contained" color="primary">ChatBoards For The New Age !</h2>
              {/* <GoogleAds slot="3979664224" /> */
              }
              <AdSense.Google
  client="ca-pub-2618750830291672"
  slot='3979664224'
/>





              <div class="form-element">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
                
              </div>
              <div class="form-element">
                
                <Link className="btn px-5" to="/login">Login to Your Account</Link>
              </div>
            </div>
            <Footer></Footer>
          </div>
          </div>
        
        
    
    )
  }
}