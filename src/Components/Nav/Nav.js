import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser, getUser} from '../../ducks/reducer';
import axios from 'axios';

class Nav extends Component{

  componentDidMount(){
    this.props.getUser();
}

logout = () => {
    axios.get('/auth/logout').then( res => {
        this.props.logoutUser();
        this.props.history.push('/');
    }).catch(err => console.log(err))
}


    render(){
    return(
        <div className='nav' >
          
        <div className='logo'>LOGO</div>

            {this.props.isLoggedIn
            ?
            <div>
            <h1>Hello!, {this.props.user.username}</h1>
            <img src={this.props.user.pic} height='150' alt='profile pic'></img>
            </div>
            :<h1>HELO</h1>}

        <div className='linkwrap' >
        <ul className='linklist'>
          <li><Link to='/dashboard' className='links' >Home</Link></li>
          <li><Link to='/post/:postid' className='links' >Post</Link></li>
          <li onClick={this.logout}><Link to='/' className='links' >Logout</Link></li>
        </ul>
        </div>

        </div>
    )

  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(Nav);