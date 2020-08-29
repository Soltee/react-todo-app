import React from 'react'

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};

	const setStatusHandler = (e) => {
		console.log(e.target.value);
		setStatus(e.target.value);
	};

	const setTodosHandler = (e) => {
		e.preventDefault();
		if(inputText === '') return;
		setTodos([
			...todos, {
				text      : inputText,
				completed : false,
				id        : Math.random() * 1000
			}
		]);

		setInputText('');
	};

	return (
		<form>
			<div className="flex items-center w-full">
				<input 
					value={inputText} 
					onChange={inputTextHandler} 
					type="text" 
					className="px-3 py-3 rounded-l text-gray-900" />
				<button 
					onClick={setTodosHandler}
					className="px-3 py-3 rounded-r bg-blue-600 hover:bg-blue-500 text-white">

						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
				</button>


				<div className=" ml-4 inline-block relative w-24">
				  <select onChange={setStatusHandler} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-900">
				    <option value="all">All</option>
				    <option value="completed">Completed</option>
				    <option value="uncompleted">Uncompleted</option>
				  </select>
				  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
				    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
				  </div>
				</div>
			</div>
		</form>
	);
}

export default Form;