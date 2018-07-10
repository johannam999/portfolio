import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../../styles/main.scss';
import Header from '../header/header';
// import './header.scss';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div className='app-components'>
            <Header/>
              {/* <Route exact path='/about me' component={ AboutMe }/> */}
          </div>
        </BrowserRouter>     
    
    );
  }
}

export default App;
