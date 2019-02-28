import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

/* import uuid from 'uuid'; */

import './App.css';
import axios from 'axios';

class App extends Component { //main App component
  //app-level state because we are sharing this between components
  state = {
      /*
      todos: [{
          id: uuid.v4(),
          title: "Take out the trash",
          completed: false
      }, {
          id: uuid.v4(),
          title: "Dinner with wife",
          completed: true
      }, {
          id: uuid.v4(),
          title: "Meeting with boss",
          completed: false
      }]
      */
      todos: [] //will be updated when we fetch todos from API
  }

  componentDidMount() { //lifecycle method needed for requests
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(res => this.setState({
        todos: res.data
      })
    ); 
    
    //get 3 todos from API and put them in the state inside the todos array
  }

  //toggle complete todo
  markComplete = (id) => {
    console.log(id);

    //we need to change the state for the todo with this particular 'id' - the state is an object
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    });
  }

  //delete todo
  deleteTodo = (id) => {
    console.log(id);

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );

    //we need to change the state by removing the todo with this particular 'id' - use filter method
    //copy everything that's already there (spread operator [...]) and then we wanna filter
  }

  //add todo
  addTodo = (title) => {
    console.log(title);

    /*
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    */

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    }).then(res => this.setState({
        todos: [...this.state.todos, res.data]
      })
    );

    //we need to add this todo to our state, we also use the spread operator [...]
    //we can't just change it, we need to make a copy (using the spread operator)
  }

  render() {
    //console.log(this.state.todos);
      
    return (
      //if we wanna use router, we have to wrap everything in BrowserRouter (alias Router)
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  deleteTodo={this.deleteTodo} 
                />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

//this is formatted like any other class-based components like in the slides