import React from 'react';
import '../../App.css';
import PlayerProfile from '../PlayerProfile';
import p1 from '../../images/p1.jpg'
import p2 from '../../images/p2.jpg'
import p3 from '../../images/p3.jpg'
import p4 from '../../images/p4.jpg'
import p5 from '../../images/p5.jpg'
import p6 from '../../images/p6.jpg'
import p7 from '../../images/p7.jpg'
import p8 from '../../images/p8.jpg'
import p9 from '../../images/p9.jpg'
import p10 from '../../images/p10.jpg'
import p11 from '../../images/p11.jpg'

function Players() {
  return (
    
  <div className='team'>
      <h1>PLAYERS</h1>
      <div className='team-container'>
        <div className='team-wrapper'>
          <ul className='player-list'>
          <PlayerProfile
        src={p1}
        text='KUSAL PERERA'
        role='KEEPER/BATSMEN'
        />
            <PlayerProfile
        src={p2}
        text='PATHUM NISSANKA'
        role='BATSMEN'
        />
        <PlayerProfile
        src={p3}
        text='CHARITH ASALANKA'
        role='BATSMEN'
        />
        <PlayerProfile
        src={p4}
        text='BHANUKA RAJAPAKSA'
        role='BATSMEN'
        />
          </ul>
          <ul className='player-list'>
          <PlayerProfile
        src={p5}
        text='AVISHKA FERNANDO'
        role='BATSMEN'
        />
        <PlayerProfile
        src={p6}
        text='WANINDU HASARANGA'
        role='ALL-ROUNDER'
        />
        <PlayerProfile
        src={p7}
        text='DASUN SHANAKAE'
        role='ALL-ROUNDER'
        />
        <PlayerProfile
        src={p8}
        text='CHAMIKA KARUNARATNE'
        role='ALL-ROUNDER'
        />
          </ul>
          
          <ul className='player-list'>
          <PlayerProfile
        src={p9}
        text='DUSHMANTHA CHAMEERA'
        role='BOWLER'
        />
        <PlayerProfile
        src={p10}
        text='MAHEESH THEEKSHANA'
        role='BOWLER'
        />
        <PlayerProfile
        src={p11}
        text='LAHIRU KUMARA'
        role='BOWLER'
        />
        <PlayerProfile
        src={p1}
        text='KUSAL PERERA'
        role='WICKET-KEEPER/BATSMEN'
        />
          </ul>
        </div>
      </div>
    </div>

  );
}
export default Players