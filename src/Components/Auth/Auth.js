import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loginUser} from '../../ducks/reducer';

class Auth extends Component{
  constructor(){
    super();
    this.state = {
        password: '',
        username: '',
    }
}

changeHandler = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}

login = () => {
  const {username, password} = this.state;
  axios.post('/auth/login', {username, password}).then(res => {
      this.props.loginUser(res.data);
  }).catch(err => {
      console.log(err);
      alert('Login Failed')
  })
}

register = () => {
  const {username, password} = this.state;
  axios.post('/auth/register', {username, password}).then(res => {
      this.props.loginUser(res.data);
  }).catch(err => {
      console.log(err);
      alert('Register Failed')
  })
}



    render(){
      const {password, username} = this.state;
    return(
        <div className='login-container' >


                <div>
                    <input onChange={e => this.changeHandler(e)} name="username" type="text" value={username} placeholder="Username"/>
                    <input onChange={e => this.changeHandler(e)} name="password" type="password" value={password} placeholder="Password"/>
                    <div className="btn-container">
                        <button onClick={this.login}>Login</button>
                        <button onClick={this.register}>Register</button>
                    </div> 
                </div>


        </div>
    )

  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {loginUser})(Auth);