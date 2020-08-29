import React from 'react'

const Form = () => {
	
	return (
		<form>
			<div className="flex items-center">
				<input type="text" class="px-3 py-3 rounded-l border border-gray-300" />
				<button className="px-3 py-3 rounded-r bg-blue-600 hover:bg-blue-500 text-white">Create</button>
			</div>
		</form>
	);
}

export default Form;