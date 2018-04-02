import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Overview from './Overview';
import Projects from './Projects';
import Teams from './Teams';
import Employees from './Employees';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/react-github-page' render={() => (
          <Overview />
        )} />

        <Route exact path='/react-github-page/projects' render={() => (
          <Projects dataSource="https://radiant-lake-28462.herokuapp.com/projects" />
        )} />

        <Route exact path='/react-github-page/teams' render={() => (
          <Teams dataSource="https://radiant-lake-28462.herokuapp.com/teams" />
        )} />

        <Route exact path='/react-github-page/employees' render={() => (
          <Employees dataSource="https://radiant-lake-28462.herokuapp.com/employees" />
        )} />

        <Route render={() => (
          <NotFound />
        )} />
      </Switch>
    );
  }
}

export default App;