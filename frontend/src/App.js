import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route,BrowserRouter,Link} from 'react-router-dom';
import Home from './views/Home.js';
import Register from './views/Register.js';

class App extends Component {
  render() {
    return (
      <div>
        <main role="main">
          <div class="jumbotron">
              <div className="header">
                 Hello, world!
This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.
              </div>
           </div> 
            <div className="container">
              <div className="row">
                <div className="col-md-4" >
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/register" component={Register} />         
                  </Switch>
                </div>
              </div>
            </div>

            <footer className="container">
              Footer
            </footer>
          </main>
      </div>
    );
  }
}

export default App;
