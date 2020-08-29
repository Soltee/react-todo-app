import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
	//variable, Method = function(iniitalValue = "")
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([])
  	return (
	    <div className="App bg-gray-900 text-white py-8 h-screen w-full max-w-4xl">
	      <header className="flex justify-center items-center">
	      	<h1 className="text-center px-3 py-3 uppercase leading-loose text-2xl md:text-4xl">Todo Project </h1>
	      </header>

	      <div className="my-4 flex flex-col justify-center items-center w-full">
	      	<Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
	      	<TodoList  todos={todos} />
	      </div>


	    </div>
  	);
}

export default App;
