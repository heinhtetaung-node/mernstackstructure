import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Home from './views/Home.js';
import Register from './views/Register.js';
import './scss/bootstrapcustom.scss'; 

class App extends Component {
  render() {
    return (
			<div>
				<nav className="navbar sticky-top navbar-light bg-grey borderbottom navback">
					<div className="container">
						<h4 class="my-0 mr-md-auto font-weight-normal">{'{}'} DevPlanet</h4>
						<nav class="my-2 my-md-0 mr-md-3">
							<a class="p-2 text-dark" href="#">Questions</a>
							<a class="p-2 text-dark" href="#">Articles</a>
							<a class="p-2 text-dark" href="#">Jobs</a>
							<a class="p-2 text-dark" href="#">Advertising</a>
						</nav>			
						<a class="btn btn-outline-primary" href="#">Sign up</a>		
					</div>
				</nav>
				<div className="container">													
					<br />
					<BrowserRouter>
						<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/register" component={Register} />         
							</Switch>
					</BrowserRouter>
					<br />
					
				</div>
				<footer class="container">
					<p class="float-right"><a href="#">Back to top</a></p>
					<p>© 2017-2018 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
				</footer>
			</div>
    );
  }
}

export default App;
