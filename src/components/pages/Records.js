import React from 'react';
import '../../App.css';
import './Records.css'
import g1 from '../../images/g1.jpg'
import g2 from '../../images/g2.jpg'
import g3 from '../../images/g3.jpg'
import g4 from '../../images/g4.jpg'
import g5 from '../../images/g5.jpg'
import g6 from '../../images/g6.jpg'
import g7 from '../../images/g7.jpg'

function Records() {
  return (
    <><div className='grid'>
    <h1>Records at the WORLD-CUP</h1>
    <div className='row'>
    <div className='column'>
    <div className='box'>
      <img src={g1} alt='' class='image' ></img>
      <p1>HIGHEST TOTAL INNING</p1>
      </div>

      <div className='box'>
      <img src={g2} alt='' class='image' ></img>
      <p2>MOST CAREER RUNS</p2>
      </div>

      <div className='box'>
      <img src={g3} alt='' class='image' ></img>
      <p3>BEST FIGURE</p3>
      </div>
      <div className='box'>
      <img src={g7} alt='' class='image' ></img>
      <p7>HAT-TRICK</p7>
      </div>
    </div>
    <div className='column'>
    <div className='box'>
      <img src={g4} alt='' class='image' ></img>
      <p4>HIGHEST PARTNERSHIP</p4>
      </div>
      <div className='box'>
      <img src={g5} alt='' class='image' ></img>
      <p5>THIRD MOST CAREER RUNS</p5>
      </div>
      <div className='box'>
      <img src={g6} alt='' class='image' ></img>
      <p6>MOST CAREER WICKETS</p6>
      </div>
    </div>
    </div>
    </div>
    </>

  );
}
export default Records