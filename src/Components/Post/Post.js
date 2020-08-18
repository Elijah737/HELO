import React, {Component} from 'react';

class Post extends Component{
    render(){
    return(
      <div>
        <h1>New Post</h1>
        <h3>Title</h3>
        <input type='text'/>
        {/* <img alt='image input'></img> */}
        <div className="userImage" ></div>
        <h3>Image URL:</h3>
        <input/>
        <h3>Content:</h3>
        <textarea />
        <button>Post</button>
      </div>
    )

  }
}

export default Post;