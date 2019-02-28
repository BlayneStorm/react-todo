import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => { //dynamic styling
    return {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
            {title} 
            <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//define PropTypes for this class
TodoItem.propTypes = { //an object of props
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

/*
const itemStyle = {
    backgroundColor: '#f4f4f4'
}
*/

const btnStyle = {
    background: '#D9594C',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem

//this is formatted like any other class-based components like in the slides
