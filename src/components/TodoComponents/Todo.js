import React from "react";


const Todo = props => {

	return (
		<div className={`todoDiv${props.item.completed ? ' completed' : ''}`}
			onClick={() => props.toggleClassName(props.item.id) }
		>
			<h3 className='h3Todo' >{props.item.item}</h3>

		</div>
	);
}
export default Todo;