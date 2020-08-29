import React from 'react'
import Todo from './Todo.js'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className="flex flex-col mt-4">
			<div className="flex items-center">
				{ filteredTodos.length } items displayed
			</div>
			<ul className="m-0 flex flex-col mt-5">
				{
					filteredTodos.map(todo => (
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