import React from "react";


const Todo = props => {
	console.log(props)
	return (
		<div className={`todoDiv ${props.item.completed ? 'completed' : ''}`}>
			<h3 className='h3Todo' >{props.item.item}</h3>	
		</div>
	);
}
export default Todo;