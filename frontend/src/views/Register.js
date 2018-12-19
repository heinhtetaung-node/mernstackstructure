import React, { Component } from 'react';
import { saveUser } from './../redux/actions/useractions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

/*eslint-disable */
const mapStateToProps = state => {
  return{
      // users : state.user_reducer.users  // redux_step4 getting data from store and connect with view
  }
}

class Register extends Component {
  async register(e){
    e.preventDefault();
    const arr = {
      username : document.getElementById('username').value,
      email : document.getElementById('email').value,
      password : document.getElementById('password').value
    };
    const returndata = await this.props.saveUser(arr);
    if(!returndata.data){
      alert("Api error"); 
      console.log(returndata); 
      return false;
    }
    if(returndata.data.result == true){
      alert("Registered! please login");
    }else if(returndata.data.result == false){
      console.log(returndata.data);
      alert("validation error \n" + JSON.stringify(returndata.data));
    }else{
      alert("something error"); 
      console.log(returndata);
    }
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.register(e)}>
          <div className="form-group">
            <label >Username</label>
            <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Full Name" />
          </div>
          <div className="form-group">
            <label >Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          {/* <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div> */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <br/>
        Already have and account? <Link to='/login'>Please Login here</Link>.
        <br/>
      </div>      
    );
  }
}

export default connect(mapStateToProps, { saveUser })(Register);
