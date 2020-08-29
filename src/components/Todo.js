import React from 'react'

const Todo = ({ text, key, todo, todos, setTodos }) => {
	
	const deleteHandler = () => {
		setTodos(todos.filter(el => el.id !== todo.id));
	}


	const setCompletedHandler = () => {
		setTodos(todos.map((item) => {
			if(item.id === todo.id){
				return {
					...todo, completed : !item.completed 
				}
			}
			return item;
		}));
	}


	return (
		<div className="todo flex items-center w-full">
			<li className={`px-3 py-3 text-white list-none flex-1 ${todo.completed ? "line-through" : ''}`}>{ text }</li>
			
			<div class="flex items-center">
				<button 
					onClick={setCompletedHandler}		
					className="px-3 py-3 rounded-l hover:bg-green-600 hover:text-white text-white">
						<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6 text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
				</button>

				<button 
					onClick={deleteHandler}
					className="px-3 py-3 rounded-r hover:bg-red-600 hover:text-white text-white">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-red-500"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
				</button>
			</div>
		</div>
	);
}

export default Todo;