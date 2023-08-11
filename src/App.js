import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Resume from './resume';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
};

export default App;
