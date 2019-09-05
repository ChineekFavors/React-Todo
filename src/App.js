import React from 'react';

import Todo from "./components/TodoComponents/Todo.css";


import TodoList from "./components/TodoComponents/TodoList.js";

const todoItems = [
  {
    item: 'fix some thing for dinner',
    id: 111,
    completed: false
  },

  {
    item: 'finish todo app',
    id: 112,
    completed: false
  },
  {
    item: 'go smoke a cig',
    id: 113,
    completed: false
  },

  {
    item: 'find a bike',
    id: 115,
    completed: false
  },
  {
    item: 'go out side',
    id: 116,
    completed: false
  },
  {
    item: 'test if app work',
    id: 118,
    completed: false
  },
  {
    item: 'test if app work2',
    id: 119,
    completed: false
  },

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoItems

    };
  }

  toggleClassName = itemId => {
    console.log('clicked baby');
  }



  render() {
    return (
      <div className="appDivMainContainer">
        <h2 className="welcome">Welcome Chineek, to your Todo App!</h2>
        <TodoList todoItems={this.state.todoItems} toggleClassName={this.toggleClassName}/>
      </div>
    );
  }
}

export default App;
