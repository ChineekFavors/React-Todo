import React from 'react';


class TodoForm extends React.Component{
	constructor(){
		super();
		this.state = {
			todoItems: ''
		};
		
	}

	handleChanges = e => {
	    this.setState({todoItems: e.target.value});    
	}

	handleSubmit = e => {
		 this.setState({todoItems: ''}); 
		this.props.addItem(e, this.state.todoItems);
		
	};


	render(){
		return(
			
			<form onSubmit={this.handleSubmit} className="form">
					<input className="todoFormInput"
						type="text" 
						name="todo" 
						value={this.state.todoItems}
						placeholder="new todo item" 
						onChange={this.handleChanges}
					/>
					<button className="addBTN">add item</button>
				
			</form>
			

		);
}
};

export default TodoForm;