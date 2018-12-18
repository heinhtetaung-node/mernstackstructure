import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch,Route,BrowserRouter, Link} from 'react-router-dom';
import Home from './views/Home.js';
import Register from './views/Register.js';
import './scss/custom.scss'; 

class App extends Component {
  render() {
    return (
		<BrowserRouter>
			<div>
				<nav className="navbar sticky-top navbar-light bg-grey borderbottom navback">
					<div className="container">
						<h4 className="my-0 mr-md-auto font-weight-normal"><Link to='/'>{'{}'} DevPlanet</Link></h4>
						<nav className="my-2 my-md-0 mr-md-3">
							<a className="p-2 text-dark" href="#">Questions</a>
							<a className="p-2 text-dark" href="#">Articles</a>
							<a className="p-2 text-dark" href="#">Jobs</a>
							<a className="p-2 text-dark" href="#">Advertising</a>
						</nav>		
						<Link className="btn btn-outline-primary" to='/register'>Sign up</Link>
					</div>
				</nav>
				<div className="container">													
					<br/>					
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/register" component={Register} />         
					</Switch>					
					<br/>					
				</div>
				<footer className="container">
					<p className="float-right"><a href="#">Back to top</a></p>
					<p>© 2017-2018 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
				</footer>
			</div>
			</BrowserRouter>
    );
  }
}

export default App;
