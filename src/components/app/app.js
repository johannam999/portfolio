import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as routes from '../../routes';
import Projects from '../../components/projects/projects';
import '../../../styles/main.scss';
import Header from '../header/header';
// import './header.scss';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div className='app-components'>
            <Header/>
            <Route exact path={routes.PROJECTS_ROUTE} component={ Projects }/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
