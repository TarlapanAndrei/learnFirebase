import React from 'react';
import HomePage from './pages/homePage/homepage.component';
import SignIn from './pages/signIn/signIn.component';
import SignUp from './pages/signUp/signUp.component';
import Header from './components/header/header.component';
import Changes from './pages/change/change.component';
import './App.css';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/change' component={Changes} />
    </Switch>
    </div>
  );
}

export default App;
