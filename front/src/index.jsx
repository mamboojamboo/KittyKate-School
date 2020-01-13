import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import TopBar from './components/topBar/TopBar';
import Routes from './routes';
import './main.css';


const App = () => (
  <div className='container'>
    <Router>
      <TopBar/>
      <Routes/>
    </Router>
    KittyKate-School
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
