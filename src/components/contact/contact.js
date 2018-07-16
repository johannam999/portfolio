import React from 'react';
import linkedinLogo from '../../assets/linkedin-icon.png';
import githubLogo from '../../assets/GitHub-Mark-32px.png';
import envelopeLogo from '../../assets/envelope.png';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <a href='mailto:joanna.m.coll@gmail.com' ><img src={envelopeLogo} width='32px'/>
            </a>
          </div>
          <div>
            <a href='https://github.com/johannam999'><img src={githubLogo}/>
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/joanna-coll/'><img src={linkedinLogo} width='49px'/>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Contact;