import React from 'react';

const Remove = (props) => {
	return(
		<button className="clearBTN" onClick={props.clearCompleted}>remove completed</button>
	);
};

export default Remove;