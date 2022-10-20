import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NavigationBar from './components/NavigationBar';
import Submission from './pages/Submission';
import NewHome from './pages/NewHome';

const Main = () => {
  return (
    <Switch > {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={NewHome}></Route>
      <Route exact path='/submission' component={Submission}></Route>
      <>
        <NavigationBar />
        <Route exact path='/portfolio' component={Portfolio}></Route>
        <Route exact path='/contact' component={Contact}></Route>
      </>
    </Switch>
  );
}
export default Main;
