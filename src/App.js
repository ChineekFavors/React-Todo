import React from 'react';

import Todo from "./components/TodoComponents/Todo.css";


import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";

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
    item: 'find a bike',
    id: 115,
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

  addItem = (e, itemName) => {
    e.preventDefault();
    const newItem = {
      item: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newItem]
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todoItems: this.state.todoItems.filter(item => !item.completed)   
    });

  }

  toggleClassName = itemId => {
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed}
        }
        return item;
      })
    });
  };




  render() {
    return (
      <div className="appDivMainContainer">
        <h1 className="welcome">Welcome Chineek, to your Todo App!</h1>
        <TodoForm addItem={this.addItem}/>
        <h2>Todo List....</h2>
          <TodoList todoItems={this.state.todoItems} 
            toggleClassName={this.toggleClassName}
            handleChange={this.handleChange}
            addItem={this.addItem}
            clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
