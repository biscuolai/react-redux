import React, { Component } from 'react'

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initial: 'state',
    };
    this.onChange = this.onChange.bind(this); 
    this.onSubmit = this.onSubmit.bind(this); 
  }

  componentWillMount() {
    this.setState({
      title: '',
      body: ''
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body 
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Add Post</h1>
        </div>
        <form onSubmit={this.onSubmit}>
          <label>Title:</label><br />
          <input type='text' 
                 name='title' 
                 onChange={this.onChange}
                 value={this.state.title}></input>
          <br />
          <label>Body:</label><br />
          <textarea name='body' 
                    onChange={this.onChange}
                    value={this.state.body}></textarea>
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default PostForm;