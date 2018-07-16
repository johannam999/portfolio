import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as routes from '../../routes';
import Projects from '../../components/projects/projects';
import '../../../styles/main.scss';
import Header from '../header/header';
import Background from '../background/background';
import About from '../about/about';
import Contact from '../contact/contact';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div className='app-components'>
            <Header/>
            <Route exact path={routes.PROJECTS_ROUTE} component={ Projects }/>
            <Route exact path={routes.BACKGROUND_ROUTE} component={ Background }/>
            <Route exact path={routes.ABOUT_ROUTE} component={ About }/>
            <Route exact path={routes.CONTACT_ROUTE} component={ Contact }/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
