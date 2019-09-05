// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import TodoForm from "./TodoForm.js";
import Remove from "./Remove.js";
import Todo from "./Todo.js";


const TodoList = (props) => {

	
	return (
		<div className="toDoListDiv">
			{props.todoItems.map(item => (
				<Todo key={item.id} item={item} toggleClassName={props.toggleClassName}/>
			))}
			<Remove />
		</div>

	);
};

export default TodoList;