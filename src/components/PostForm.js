import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions'; 

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

    this.props.addPost(post);
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
          <br />
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}


PostForm.propTypes = {
  addPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  post: state.posts.item
})

export default connect(mapStateToProps, {addPost})(PostForm); 
