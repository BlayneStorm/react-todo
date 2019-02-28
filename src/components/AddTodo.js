import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  //component state = only exists in the AddTodo component
  state = {
    title: ''
  }

  onSubmitFunc = (event) => {
    //it's gonna try and submit to the actual file and we want to prevent that
    event.preventDefault();

    this.props.addTodo(this.state.title);
    this.setState({
      title: ''
    });
  }

  //the state needs to constantly be changed as this onChange event fires
  onChangeFunc = (event) => {
    this.setState({
      title: event.target.value //set the title to whatever we type in (e.target.value) - we can also use e.target.name instead of title
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitFunc} style={{display: 'flex'}}>
          <input type="text" 
            name="title" 
            placeholder="Add Todo..." 
            style={{flex: '10', padding: '5px'}}
            value={this.state.title} //after submit, resets the value to ''
            onChange={this.onChangeFunc}
          />
          <input type="submit" 
            value="Submit" 
            className="btn" 
            style={{flex: '1'}} 
          />
      </form>
    
    )
  }
}

//define PropTypes for this class
AddTodo.propTypes = { //an object of props
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo
