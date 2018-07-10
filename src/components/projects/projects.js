import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';

class Projects extends React.Component {
  render() {
    return (
      <div>
          <h2>My Projects</h2>
        <div>
          <p><a href='http://musicpic.fun'> MusicPic - logo</a></p>
        </div>
        <div>
          <p><a href=''> Bloomio </a></p>
        </div>
        <div>
          <p><a href=''> Play and Rest </a></p>
        </div>
      </div>
    );
  }
}

export default Projects;
