import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={() => <div>App</div>} />
      <Route path="/login" component={() => <Link to="/">root</Link>} />
      <Route path="/register" component={() => <div>register</div>} />
    </Switch>
  );
}

export default App;
