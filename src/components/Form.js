import React from 'react'

const Form = ({ inputText, setInputText, todos, setTodos }) => {

	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
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
			</div>
		</form>
	);
}

export default Form;