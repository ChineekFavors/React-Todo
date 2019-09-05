import React from 'react';


const TodoForm = () => {
	return(
		<section className="toDoDiv">
			<form className="form">
				<div className="addDiv">
					<input type="text" name="todo" placeholder="new todo item" />
					<button className="addBTN">add item</button>
				</div>

				<button className="clearBTN">remove completed</button>
			</form>
		</section>

	);
};

export default TodoForm;