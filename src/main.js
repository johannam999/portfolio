import React from 'react';
import { render as renderDom } from 'react-dom';

import App from './components/app/app';

// import '../styles/main.scss';


const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

renderDom(<App/>, appContainer);
