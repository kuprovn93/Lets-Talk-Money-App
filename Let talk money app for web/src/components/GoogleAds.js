import React, { Component } from 'react';

class GoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <div className='ad'>
            <ins className="adsbygoogle" style={{display:"block", height:'5vh'}}
            data-ad-client="ca-pub-2618750830291672"
            data-ad-slot="3979664224"
            data-ad-format="auto"
            data-adtest="on"
            data-full-width-responsive="true"></ins></div>
        );
    }
}

export default GoogleAds;