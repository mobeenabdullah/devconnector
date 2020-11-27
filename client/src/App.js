import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './comonents/layout/Navbar';
import Landing from './comonents/layout/Landing';
import Register from './comonents/auth/Register';
import Login from './comonents/auth/Login';
import Alert from './comonents/layout/Alert';
import Dashboard from './comonents/dashboard/Dashboard';
import CreateProfile from './comonents/profile-forms/CreateProfile';
import EditProfile from './comonents/profile-forms/EditProfile';
import AddExperience from './comonents/profile-forms/AddExperience';
import AddEducation from './comonents/profile-forms/AddEducation';
import Profiles from './comonents/profiles/Profiles';
import Profile from './comonents/profile/Profile';
import PrivateRoute from './comonents/routing/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path='/' component={Landing} />
                    <section className='container'>
                        <Alert />
                        <Switch>
                            <Route exact path='/register' component={Register} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/profiles' component={Profiles} />
                            <Route exact path='/profile/:id' component={Profile} />
                            <PrivateRoute exact path='/dashboard' component={Dashboard} />
                            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
                            <PrivateRoute exact path='/add-experience' component={AddExperience} />
                            <PrivateRoute exact path='/add-education' component={AddEducation} />
                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    )
};

export default App;
