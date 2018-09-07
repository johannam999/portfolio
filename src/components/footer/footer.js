
import React from 'react';

import './footer.scss';
import githubLogo from '../../assets/GitHub-Mark-32px.png';
import linkedinLogo from '../../assets/linkedin-icon.png';


class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <h2> © by Joanna Coll 2018</h2>
        <div>
        <a        href='https://github.com/johannam999'><img src={githubLogo}/>
        </a>
        <a href='https://www.linkedin.com/in/joanna-coll/'><img src={linkedinLogo} width='49px'/>
        </a>
        </div>
      </footer>
      
    );
  }
}

export default Footer;
