import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import TopBar from './components/topBar/TopBar';
import Routes from './routes';
import { CurrentUserProvider } from './contexts/currentUser';
import CurrentUserChecker from './components/currentUserChecker/CurrentUserChecker';
import './main.css';
import Footer from './components/footer/Footer';


const App = () => (
  <div className='container'>
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar/>
          <Routes/>
          <Footer/>
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
