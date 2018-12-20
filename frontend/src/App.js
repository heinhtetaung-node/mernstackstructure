import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch,Route,BrowserRouter, Link} from 'react-router-dom';
import Home from './views/Home.js';
import Register from './views/Register.js';
import Login from './views/Login.js';
import './scss/custom.scss'; 
import 'bootstrap/dist/js/bootstrap.js';

import { connect } from 'react-redux';
import { logoutUser } from './redux/actions/useractions';

/*eslint-disable */
const mapStateToProps = state => {
	return{
		authinfo : state.auth_reducer.authinfo
	}
}

/*eslint-disable */
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
							{/* calling stateless component in order to familar with stateless component  */}
							<ShowSignupOrUserinfo logoutUser={this.props.logoutUser} authinfo={this.props.authinfo} />  {/* authinfo={this.props.authinfo} is passing props to stateless */}		
						</div>
					</nav>
					<div className="container">													
						<br/>					
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/register" component={Register} /> 
							<Route path="/login" component={Login} />         
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

/*
 * stateless component
 */
const ShowSignupOrUserinfo = (props) => {	
	const logout = (para) => { // writing function with para in stateless comp awesome hah!
		console.log(para); 
		props.logoutUser((message) => {
			alert(message);
			window.location.reload();
		});
	};
	let signuplink = <Link className="btn btn-outline-primary" to='/register'>Sign up</Link>;
	if(props.authinfo != null){
		signuplink = (
			<div className="btn-group btn-sm">
				<button type="button" className="btn btn-danger dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					{props.authinfo.username}
				</button>
				<div className="dropdown-menu">
					{/* onClick={() => logout('a')} passing parameter to stateless function  */}
					<a className="dropdown-item" onClick={() => logout('testing para')} href="#">Logout</a>
				</div>
			</div>
		);
	}						
	return signuplink;
};


export default connect(mapStateToProps, {logoutUser})(App);
