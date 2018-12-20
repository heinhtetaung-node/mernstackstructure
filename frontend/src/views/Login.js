import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './../redux/actions/useractions';

/*eslint-disable */
const mapStateToProps = state => {
    return{
        // users : state.user_reducer.users  // redux_step4 getting data from store and connect with view
    }
}

class Login extends Component {
    login(e) {
        e.preventDefault();
        const data = {
            'email' : document.getElementById('email').value,
            'password' : document.getElementById('password').value
        }

        // calling callback function
        this.props.loginUser(data, (data) => {
            if(data.result == false && data.validateerr){
                alert(JSON.stringify(data.validateerr));
                return false;
            }
            if(data.result == false){
                alert(JSON.stringify(data));
                return false;
            }
            if(data.result == true){
                console.log(data);
                alert("Login Success");
                this.props.history.push('/');
                return false;
            }
            alert(JSON.stringify(data) + " unknown error ");
        });

        // calling api promise function
        // loginUserPromise(data).then((data) => {
        //     console.log(data);
        // }).catch((err) => {
        //     console.log(err);
        // });

        // calling custom promise function
        // const number = 3;
        // testCustomPromiseCheckEven(number).then((data) => {
        //     alert(JSON.stringify(data));
        // }).catch((err) => {
        //     alert(JSON.stringify(err));
        // });
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

export default connect(mapStateToProps, { loginUser })(Login);