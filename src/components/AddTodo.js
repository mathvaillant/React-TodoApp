import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ title: e.target.value});

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' }); 
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input 
        type="text" 
        name="title" 
        placeholder="Add Todo..."
        style={{ flex: '10', padding: '0.2rem'}}
        value={this.state.title}
        onChange={this.onChange}
        />
        <input 
        className="btn"
        type="submit" 
        value="Submit"
        style={{ flex: '1' }}
        />
      </form>
    )
  }
}

// PropTypes 
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}


export default AddTodo

