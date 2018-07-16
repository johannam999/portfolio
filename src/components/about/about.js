import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';
import joannaPicture from '../../assets/joanna.png';

class About extends React.Component {
  render() {
    return (
      <div>  
        <img src={joannaPicture} alt='joanna picture' width='20%'/>
        <h2>Hi!</h2>
        <p>I am a full-stack Javascript developer with a background in human resources, event planning and business administration. My passion is making sense of data, finding order in chaos, shipping products on time and designing clean, impactful user experiences.</p>
        <button><Link to={routes.BACKGROUND_ROUTE}> View my resume </Link>
        </button>
      </div>
    );
  }
}

export default About;
