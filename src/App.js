import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Schedule from './components/pages/Schedule';
import Results from './components/pages/Results';
import Players from './components/pages/Players';
import Records from './components/pages/Records';
import Footer from '../src/components/footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/News' exact component={News} />
        <Route path='/Schedule' exact component={Schedule} />
        <Route path='/Results' exact component={Results} />
        <Route path='/Players' exact component={Players} />
        <Route path='/Records' exact component={Records} />
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
