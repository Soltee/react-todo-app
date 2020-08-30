import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {

	//variable, Method = function(iniitalValue = "")
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	//Once the page loads
	useEffect(() => {
		getFromLocalStorage();
	}, []);

	//Use Effect
	useEffect(() => {
		filterHandler();
		saveToLocalStorage();
	}, [todos, status]);

	//Filters
	const filterHandler = () => {
		switch(status) {
			case 'completed':
			    setFilteredTodos(todos.filter(todo => todo.completed === true));
			    break;
			case 'uncompleted':
				setFilteredTodos(todos.filter(todo => todo.completed === false));
			    break;
			default:
				setFilteredTodos(todos);
				break;
		}		
	}

	//LocalStorage CRUD
	const saveToLocalStorage = () => {
		localStorage.setItem('todos', JSON.stringify(todos));			
	}

	const getFromLocalStorage = () => {
		if(localStorage.getItem('todos')  === null){
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem('todos'));			
			setTodos(todoLocal);
		}
	}

  	return (
	    <div className="App bg-gray-900 text-white py-8 h-screen w-full ">
		    <div className="App  text-white py-8 h-full w-full max-w-4xl mx-auto">

				<header className="flex justify-center items-center">
		      	    <h1 className="text-center px-3 py-3 uppercase leading-loose text-2xl md:text-4xl">Todo Project </h1>
		        </header>

		      <div className="my-4 flex flex-col justify-center items-center w-full">
		      	<Form 
		      		todos={todos} 
		      		setTodos={setTodos} 
		      		inputText={inputText} 
		      		setInputText={setInputText} 
		      		setStatus={setStatus} 
		      		/>

		      	<TodoList  
		      		todos={todos} 
		      		setTodos={setTodos} 
		      		inputText={inputText} 
		      		setInputText={setInputText} 
		      		filteredTodos={filteredTodos}
		      		/>
		      </div>


		    </div>
	</div>
  	);
}

export default App;
