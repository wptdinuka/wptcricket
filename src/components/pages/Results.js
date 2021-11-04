import React from 'react';
import '../../App.css';
import CardItem from '../Card';
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import image5 from '../../images/b.jpg'
import image6 from '../../images/c.jpg'


function Results() {
  return (
    
  <div className='cards'>
      <h1>RESULTS-2021</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src ={image1}
              text='Sri Lanka vs Namibia'
              p="RESULT
              Namibia-96
              Sri Lanka-(13.3/20 ov, target 97)-100/3
              Sri Lanka won by 7 wickets (with 39 balls remaining)"
              label='Won'
              path='/'
            />
            <CardItem
              src ={image2}
              text='Sri Lanka vs Ireland'
              p="RESULT
              Sri Lanka-171/7
              Ireland-(18.3/20 ov, target 172)101
              Sri Lanka won by 70 runs"
              label='Won'
              path='/' 
            />
            <CardItem
              src ={image3}
              text='Sri Lanka vs Netherlands'
              p="RESULT
              Netherlands-44
              Sri Lanka-(7.1/20 ov)45/2
              Sri Lanka won by 8 wickets (with 77 balls remaining)"
              label='Won'
              path='/' 
           />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src ={image4}
              text='Sri Lanka vs Bangladesh'
              p="RESULT
              Bangladesh 171/4 
              Sri Lanka (18.5/20 ov) 172/5 
              Sri Lanka won by 5 wickets (with 7 balls remaining)"
              label='Won'
              path='/'
            />
            <CardItem
              src ={image5}
              text='Match-Sri Lanka vs Australia'
              p="RESULT
              Sri Lanka-154/6
              Australia-(17/20 ov) 155/3
              Australia won by 7 wickets (with 18 balls remaining)"
              label='Lost'
              path='/'
            />
            <CardItem
              src ={image6}
              text='Sri Lanka vs South Africa'
              p="RESULT
              Sri Lanka-142
              South Africa-(19.5/20 ov, target 143) 146/6
              South Africa won by 4 wickets (with 1 ball remaining)"
              label='Lost'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>

  );
}
export default Results