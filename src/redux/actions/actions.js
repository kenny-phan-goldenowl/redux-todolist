// export const addTodoAction = {
//     type: "todoList/addTodo",
//     payload: {id: 5, name: "Jogging", status: "Done"}
// }
// action creators -> use this one
export const addTodo = (data) => {
	return {
		type: "todoList/addTodo",
		payload: data,
	};
};

export const removeTodo = (data) => {
	return {
		type: "todoList/removeTodo",
		payload: data,
	};
};

export const removeAll = (data) => {
	return {
		type: "todoList/removeAll",
		payload: data,
	};
};

export const statusFilter = (data) => {
	return {
		type: "filter/statusChange",
		payload: data,
	};
};

export const taskFilter = (data) => {
	return {
		type: "filter/faskFilter",
		payload: data,
	};
};
