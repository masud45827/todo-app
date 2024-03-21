import React from 'react';
import { useDispatch } from 'react-redux';
import { isComplete,deleteTodo } from '../redux/TodoSlice';
import "../assets/style.css"
const TodoModel = ({ id, title, completed }) => {
    const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(isComplete({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id }));
	};

	return (
		<li className='list'> 
			<div className='list-down'>
				<div className='list-item' >
					<input
						type='checkbox'
						checked={completed}
						onClick={handleCheckboxClick}
					></input>
					{title}
				</div>
				<button onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoModel;