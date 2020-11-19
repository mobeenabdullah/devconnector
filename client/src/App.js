import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './comonents/layout/Navbar';
import Landing from './comonents/layout/Landing';
import Register from './comonents/auth/Register';
import Login from './comonents/auth/Login';
import './App.css';

const App = () => (
    <Router>
        <Fragment>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <section className='container'>
                <Switch>
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
            </section>
        </Fragment>
    </Router>
);

export default App;
