import React from 'react';

import '../../App.css';
import HeroSection from '../HeroSection';
import image from '../../images/5.jpg'


function Home () {
    return(
        <>
        <HeroSection />

        <div className='intro'>
            <h1>Sri Lankan Cricket</h1>
            <img src={image} alt='' width="100%"></img>
            <p>Sri Lanka's national cricket team achieved considerable success 
                beginning in the 1990s, rising from underdog status to winning 
                the Cricket World Cup in 1996, under the captaincy of Arjuna 
                Ranatunga. Since then, the team has continued to be a force in 
                international cricket. The Sri Lankan cricket team reached the 
                finals of the 2007 and 2011 Cricket World Cups consecutively. 
                They ended up being runners-up on both occasions. </p>
                <p>
                Sri Lanka won the Cricket World Cup in 1996 (vs Australia), the 
                ICC Champions Trophy in 2002 (co-champions with India), and the 
                ICC T20 World Cup in 2014 (vs India). They have been consecutive
                runners up in the 2007 and 2011 Cricket World Cups, and have been 
                runners up in the ICC T20 World Cup in 2009 and 2012. The Sri Lankan 
                cricket team currently holds several world records, including the
                world record for he highest team total in Test cricket.</p>
        </div>
        
        </>

    );
}

export default Home;