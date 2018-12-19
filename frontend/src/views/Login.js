import React, { Component } from 'react';
import { loginUser } from './../redux/actions/useractions';

class Login extends Component {
    login(e) {
        e.preventDefault();
        const data = {
            'email' : document.getElementById('email').value,
            'password' : document.getElementById('password').value
        }
        loginUser(data, (data) => {
            if(data.result == false && data.validateerr){
                alert(JSON.stringify(data.validateerr));
            }
        });
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={(e) => this.login(e)}>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control" id="email"  />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>                
            </div>          
        );
    }
}

export default Login;
