
import React from 'react';

import githubLogo from '../../assets/GitHub-Mark-32px.png';
import linkedinLogo from '../../assets/linkedin-icon.png';

import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <h2> © by Joanna Coll 2018</h2>
        
        <a        href='https://github.com/johannam999'><img src={githubLogo}/>
        <GitHubLargeSVG className='other-svgs wiggle'/>
        </a>
        <a href='https://www.linkedin.com/in/joanna-coll/'><img src={linkedinLogo} width='49px'/>
        </a>
        
      </footer>
      
    );
  }
}

export default Footer;
