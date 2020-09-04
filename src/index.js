import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import RecordProvider from './config/contexts/RecordContext';

import './assets/styles/root.scss';

ReactDOM.render(
    <Router>
        <RecordProvider>
            <App />
        </RecordProvider>
    </Router>,
    document.getElementById('root'),
);

serviceWorker.unregister();
