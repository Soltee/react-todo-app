import React from 'react'
import Todo from './Todo.js'

const TodoList = ({ todos, setTodos }) => {
	return (
		<div className="flex flex-col mt-4">
			<ul className="m-0 flex flex-col">
				{
					todos.map(todo => (
						<Todo 
							setTodos={setTodos}
						    todos={todos}
							text={todo.text} 
							todo={todo} 
							key={todo.id} />
					))
				}

				
			</ul>
		</div>
	);
}

export default TodoList;