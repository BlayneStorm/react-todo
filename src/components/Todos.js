import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component { //main App component

  render() {
    //console.log(this.props.todos); //array of objects/todos - these come down from the state of App component
      
    return this.props.todos.map((todo) => (
        //for each Todo that we map through -> what do we wanna return / what do we wanna display in the browser
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
    ));
  }
}

//define PropTypes for this class
Todos.propTypes = { //an object of props
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todos;

//this is formatted like any other class-based components like in the slides

//map() = high order array method - it can return an array from an array (we use it to loop through the Todos property and output JSX)