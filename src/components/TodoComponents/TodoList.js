// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import TodoForm from "./TodoForm.js";
import Remove from "./Remove.js";


const TodoList = () => {
	return (
		<div className="toDoListDiv">
			<TodoForm />
			<Remove />
		</div>

	);
};

export default TodoList;