import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';
import './landing.scss';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
      <h2> Hi,  
        I am Joanna Coll, a Full-Stack Javascript Developer, based in Seattle, Washington. My passion is making sense of data, finding order in chaos, shipping products on time and designing clean, impactful user experiences.</h2>
      <button><Link to={routes.PROJECTS_ROUTE}>    Learn more about me </Link>
      </button>
      </div>
    );
  }
}

export default Landing;
