import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
	const [inputText, setInputText] = useState("");

  	return (
	    <div className="App bg-gray-900 text-white py-8">
	      <header className="flex justify-center items-center">
	      	<h1 className="text-center px-3 py-3 uppercase leading-loose">Todo Project</h1>
	      </header>

	      <div className="my-4 flex justify-center items-center">
	      	<Form />
	      	<TodoList />
	      </div>


	    </div>
  	);
}

export default App;
