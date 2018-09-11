import React from 'react';

import GithubLogoSVG from '../../assets/github-icon-logo.svg';
import LinkedinLogoSVG from '../../assets/linkedin-logo.svg';

import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        
        <div className='svg-container'>
          <a href='https://github.com/johannam999'>
          <GithubLogoSVG className='github-logo'/>
          </a>
          <a href='https://www.linkedin.com/in/joanna-coll/'>
          <LinkedinLogoSVG className='linkedin-logo'/>
          </a>
          <h2> © by Joanna Coll 2018</h2>
        </div>
      </footer>
      
    );
  }
}

export default Footer;
