import React from 'react';
import logoMP from '../../assets/logo.png';
import logoPR from '../../assets/logo1.png';
import bloomioLogo from '../../assets/bloomio-logo.png';
// import { Link } from 'react-router-dom';
// import * as routes from '../../routes';

class Projects extends React.Component {
  render() {
    return (
      <div>
          <h2>My Projects</h2>
        <div>
          <h1><a href='http://www.musicpic.fun'> Music Pic</a><img src={logoMP}width='90px'/></h1> 
          <p>An app that uses Azure face recognition to display Spotify playlist based on keyword.</p>
        </div>
        <div>
          <h1><a href='https://github.com/Bloomio '> Bloomio </a><img src={bloomioLogo} width='100px'/></h1>
          <p>A backend app to manage and notify about plant watering schedule.
          </p>
        </div>
        <div>
          <h1><a href='http://playandrest.us/'> Play and Rest </a><img src={logoPR}width='100px'/></h1>         
          <p>The app provides information to users about local play areas, dog off leash areas or waterfront. User can use google map search and filter by type and location.
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
