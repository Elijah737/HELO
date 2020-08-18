import React, {Component} from 'react';

class Dashboard extends Component{
  constructor(){
    super();
    this.state = {
      postSearch:''
    }
  }

  changeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

    render(){
      const {postSearch}= this.state
    return(
      <div className='dash' >
        <div>Dashboard</div>
        <div className='dashSearch'>

          <input onChange={e => this.changeHandler(e)} name='postSearch' type='text' value={postSearch}  placeholder='Search by Title' />
          <button>search</button>
          <button>Reset</button>
          <button>Check Box</button>

          {/* {posts} */}

        </div>
      </div>
    )

  }
}

export default Dashboard;