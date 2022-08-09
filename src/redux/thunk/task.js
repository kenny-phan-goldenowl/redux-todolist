const addTodo = (todo) => {
	return function addTodoThunk(dispatch) {
		dispatch(todo);
	};
};

const removeTodo = (todo) => {
	return function addTodoThunk(dispatch) {
		dispatch(todo);
	};
};

export { addTodo, removeTodo };
