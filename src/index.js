import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hiro from './Hiro';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Globe from './AR_globe';


const routing =  (
    <Router>
        <div>
            <Route exact path="/" component={Hiro} /> 
            <Route exact path="/globe" component={Globe} /> 
        </div>
    </Router>
);
ReactDOM.render(routing , document.getElementById('root'));

serviceWorker.unregister();
