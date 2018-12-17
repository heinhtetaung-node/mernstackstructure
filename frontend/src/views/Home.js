import React, { Component } from 'react';
import { getUsers } from './../redux/actions/useractions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return{
        users : state.user_reducer.users  // redux_step4 getting data from store and connect with view
    }
}

class Home extends Component {
  componentDidMount(){
    this.props.getUsers();
  }
  tabRows(){    
    if(this.props.users.datas){
      return this.props.users.datas.map((d, i) => {
        return <li key={i}>{d.username}</li>;
      });              
    }    
  }
  render() {
    return (
      <div>
      <div>
         Home layout!...

         {this.tabRows()}
      </div>
      <div className="container">
       
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { getUsers })(Home);
