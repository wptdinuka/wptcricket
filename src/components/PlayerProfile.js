import React from 'react';
import './PlayerProfile.css';
import {Link} from 'react-router-dom';



  function PlayerProfile(props) {
    return (
      <>
        <li className='player-list'>
          <Link className='player-link' to={props.path}>
            <figure className='player-pic-wrap' data-category={props.role}>
              <img
                className='player-img'
                alt={""}
                src={props.src}
              />
            </figure>
            <div className='player-info'>
              <h5 className='player-name'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }
  
  export default PlayerProfile;