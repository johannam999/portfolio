import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';

class Landing extends React.Component {
  render() {
    return (
      <div>
      <h2>Hello, I am Joanna Coll - Software Dev. Welcome to my page! Please explore my projects.</h2>
      <button><Link to={routes.PROJECTS_ROUTE}> View my resume </Link>
        </button>
      </div>
    );
  }
}

export default Landing;
