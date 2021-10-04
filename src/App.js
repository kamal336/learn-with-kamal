
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';

function App() {
  return (
   <Router>
     <Header />
    <Switch>
      <Route exact path="/">
         <Home />
      </Route>
    </Switch>
   </Router>
  );
}

export default App;
