import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Courses from './pages/courses/Courses';
import Authentication from './pages/authentication/Authentication';
import Profile from './pages/profile/Profile';

export default () => (
  <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/courses' component={Courses}/>
    <Route path='/signin' component={Authentication}/>
    <Route path='/signup' component={Authentication}/>
    <Route path='/profile' component={Profile}/>
  </Switch>
);
