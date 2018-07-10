import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as routes from '../../routes';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <li><Link to={routes.LANDING_ROUTE}> Home </Link></li>
          <li><Link to={routes.ABOUT_ROUTE}> About me</Link>
          <li><Link to={routes.PROJECTS_ROUTE}> My Projects</Link>
          </li>
          <li><Link to={routes.BACKGROUND_ROUTE}>Background</Link>
          </li>
          <li><Link to={routes.CONTACT_ROUTE}>Contact</Link>
          </li>
        </nav>
      </header>

    );
  }
}

export default Header;
