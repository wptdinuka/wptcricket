import React from 'react';
import n1 from '../images/n1.jpg'
import './NewsArticle.css'

function NewsArticle () {
    return(
        <>
        <div className='NewsArticle'>
            <h1>Sri Lanka’s Wanindu Hasaranga Becomes Highest Wicket Taker in T20I in a Calendar Year</h1>
            <img src={n1} alt='' width="100%"></img>
            <p>Sri Lanka have been good in the T20 World Cup so far and for them, the 
                biggest spark has been the form of all-rounder Wanindu Hasaranga. 
                The leg-spinner has already taken a hat-trick against South Africa
                 and became only the third bowler to do so in the T20 World Cup.
                 He continued this form against England where he picked up the wicket 
                 of Jason Roy in the first over. He then followed it up with the wicket 
                 of Jonny Bairstow and with this, became the bowler to have picked up 34 
                 wickets in T20 Internationals in 2021.This is the best performance by a 
                 bowler in a calendar year.Wanindu Hasaranga was picked up by the Royal
                  Challengers Bangalore in the IPL. However, he was not able to take even
                   a single wicket in the 2 matches he played. Now he has been in great 
                   form in the T20 World Cup and is leading the charts with 14 wickets. 
                   His best performance is 3 wickets for 9 runs and his economy rate is 
                   only 5.04, a superb performance this tournament. </p>
                <p>
                South Africa’s left-arm spin bowler Tabraiz Shamsi was left behind by
                 Wanindu Hasaranga. Shamsi held the record of taking 32 wickets in a 
                 calendar year. He has currently picked up 4 wickets in this current 
                 tournament and this is where, Hasranga has leapfrogged Shamsi and
                 looks to end the year as the leading wicket-taker in this format. 
                 Wanindu Hasaranga is only the fourth bowler in the world to take a 
                 hat-trick in both T20 and ODI formats. As far as his numbers in T20 
                 International is concerned, he has picked up 50 wickets in 32 matches 
                 and his best performance is picking up 4 wickets for 9 runs.</p>
        </div>
        </>

);
}

export default NewsArticle;