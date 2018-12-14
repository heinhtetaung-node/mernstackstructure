import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Home from './views/Home.js';
import Register from './views/Register.js';

class App extends Component {
  render() {
    return (
    	<div>
    		<div>
    			<h2>Header</h2>
    			<hr/>
    		</div>
    		<div>
    			<br />
	    		<BrowserRouter>
	    	   		<Switch>
	            		<Route exact path="/" component={Home} />
	            		<Route path="/register" component={Register} />         
	          		</Switch>
	        	</BrowserRouter>
	        	<br />
	        </div>
	        <div>
	        	<hr />
	        	<h2>Footer</h2>
	        </div>
    	</div>
    );
  }
}

export default App;
