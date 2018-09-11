import React from 'react';
import logoMP from '../../assets/logo.png';
import logoPR from '../../assets/logo1.png';
import bloomioLogo from '../../assets/bloomio-logo.png';
import './projects.scss';


class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <h1>MY PROJECTS</h1>
        <div className='musicPic' >
          <h2><a href='http://www.musicpic.fun'> </a><img src={logoMP}width='90px'/></h2> 
          <p>An app that uses Azure face recognition to display Spotify playlist based on keyword.</p>
        </div>
        <div className='bloomio'>
          <h2><a href='https://github.com/Bloomio '></a><img src={bloomioLogo} width='100px'/></h2>
          <p>A backend app to manage and notify about plant watering schedule.
          </p>
        </div>
        <div className='playAndRest'>
          <h2><a href='http://playandrest.us/'> </a><img src={logoPR}width='100px'/></h2>         
          <p>The app provides information to users about local play areas, dog off leash areas or waterfront. User can use google map search and filter by type and location.
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
