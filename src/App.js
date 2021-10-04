
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
import About from './components/About/About';
import Admission from './components/Admission/Admission';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

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
      <Route path="/admission">
        <Admission />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Router path="*">
        <NotFound />
      </Router>
    </Switch>
    <Footer />
   </Router>
  );
}

export default App;
