import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RegisterPage from './registerPage';
import { Provider } from 'react-redux';
import { firebaseApp } from '../fireBase';

// firebaseApp.auth().onAuthStateChanged(user =>{
//     if (user) {
//         console.log('user has logged in.', user);
//     } else {
//         console.log('user has logged out.')
//     }
// })

import Home from './home';
import AboutUs from './AboutUs';
import ContactUs from './contactUs';
import NavMenu from './navMenu';
import login from './login';
import SleepTracker from './SleepTracker';

import store from '../helpers/store';

export class Main extends React.Component {
    render() {
        return (
        <Provider store = {store}>    
        <Router>
            <div>
                <NavMenu />  
                <Route exact path='/' component={Home} />
                <Route path='/AboutUs' component={ AboutUs } />
                <Route path='/ContactUs' component={ ContactUs } />
                <Route path='/RegisterPage' component={ RegisterPage } />
                <Route path='/login' component={ login } />
                <Route path='/sleeptracker' component={ SleepTracker } />
            </div>
        </Router>
        </Provider>
        );
    }
}

export default Main;