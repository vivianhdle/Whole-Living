import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Desires from './desires';


function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component= {Desires}/>
      </Switch>
    </div>
  );
}

export default App;
