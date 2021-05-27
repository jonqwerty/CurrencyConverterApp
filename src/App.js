import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage';
import RatePage from './pages/rate/RatePage';

function App() {
  return (
    <div className="App">
     <Switch>
          <Route exact path='/' render={ () => <Redirect to={'/home'} /> }/>
          <Route path='/home' render={ () => <HomePage/> } />
          <Route path='/rate' render={ () => <RatePage/> } />
          <Route path='*' render={ () => <div>404 NOT FOUND</div>} />
        </Switch>
    </div>
  );
}

export default App
