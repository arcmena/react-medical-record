import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/styles/root.scss';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);

serviceWorker.unregister();
