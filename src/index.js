import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Releases from './components/Releases'
import Backlog from './components/Backlog'
import Sprints from './components/Sprints'

ReactDOM.render(
    <Router history={hashHistory}>

        <Route path='/' component={App} >
            <IndexRoute component={Home}/>
            <Route path='/releases' component={Releases} />
            <Route path='/backlog' component={Backlog} />
            <Route path='/sprints' component={Sprints} />
        </Route>

    </Router>
    ,
    document.getElementById('root'));
registerServiceWorker();
