import React from 'react';
import './HeroSection.css';
import ReactPlayer from 'react-player';
import video from '../videos/final2014.mp4'

function HeroSection() {
    
    return (
        <div className='main-container'>
        <ReactPlayer
        url={video}
        playing
        loop
        muted
        width="100%"
        height="100%"
        
        
        
      />
      <h1>
            HOPE of a NATION
          </h1>
 


        
      </div>
    );
};

export default HeroSection



        