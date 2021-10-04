
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
import Footer from './components/Footer/Footer';
import AllCourses from './components/AllCourses/AllCourses';

function App() {
  return (
   <Router>
     <Header />
    <Switch>
      <Route exact path="/">
         <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/courses">
        <AllCourses />
      </Route>
    </Switch>
    <Footer />
   </Router>
  );
}

export default App;
