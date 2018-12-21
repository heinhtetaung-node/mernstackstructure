import React, { Component } from 'react';
import axioApi from './../config/axioconfig';

const AuthMiddlewareHOC = (PassedComponent) => {
    return class AuthMiddleware extends Component{
        constructor(props){
            super(props);
            this.state = {loginuser : ''}
        }
        componentDidMount(){            
            axioApi.get('auth/user').then((res) => { 
                this.setState({
                    loginuser : res.data.id
                })                                
			}).catch((err) => {
                this.setState({
                    loginuser : 'noauth'
                })
                localStorage.removeItem('userinfo');
                this.props.history.push('/login'); 
            });          
        }
        showChild(){
            if(this.state.loginuser!=''){
                return <PassedComponent {...this.props} ref="child" />
            }
        }
        render(){
            return (
                <div>{this.showChild()}</div>
            )
        }
    }
}

export default AuthMiddlewareHOC;