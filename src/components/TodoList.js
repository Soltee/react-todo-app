import React from 'react'
import Todo from './Todo.js'

const TodoList = ({ todos }) => {
	return (
		<div className="flex flex-col mt-4">
			<ul className="m-0 flex flex-col">
				{
					todos.map(todo => (
						<Todo text={todo.text} id={todo.id} key={todo.id} />
					))
				}
			</ul>
		</div>
	);
}

export default TodoList;