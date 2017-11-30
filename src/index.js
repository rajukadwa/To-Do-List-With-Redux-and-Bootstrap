import React from 'react';
import ReactDOM from 'react-dom';
import Table from "react-bootstrap/lib/Table";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import MenuItem from "react-bootstrap/lib/MenuItem";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Home from './HomePage'
import Header from './HeaderNav'
import About from './AboutPage'
import History from './HistoryPage'

const App = () => (
  <div className="container">
   <Header />
   <Main />
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
	  <Route path='/history' component={History}/>
    </Switch>
  </main>
)


/*const Home = () => (
  <div>
    <h1> Welcome to the Peak Website! </h1>
  </div>
)*/


ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


