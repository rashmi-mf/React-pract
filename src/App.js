import React from 'react';
import routePaths from './Constants/routePaths'
import { Route, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path={`/`} render={() => {
              return (<Redirect to={`/dashboard`} />)
          }} />
          <PublicRoute restricted={true} path="/login" exact component={routePaths.Login} />
          <PrivateRoute path="/dashboard" exact component={routePaths.Dashboard} />
          <PrivateRoute path="/add-patient" exact component={routePaths.AddPatient} />
          <PrivateRoute path="/view-patient-list" exact component={routePaths.ViewPatient} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
