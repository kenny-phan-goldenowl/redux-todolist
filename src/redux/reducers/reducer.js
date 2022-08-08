const initState = {
	todoList: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case "todoList/addTodo":
			return {
				...state,
				todoList: [...state.todoList, action.payload],
			};

		case "todoList/removeTodo": {
			const newTodo = [...state.todoList];
			newTodo.splice(action.payload, 1);
			return {
				...state,
				todoList: newTodo,
			};
		}

		case "todoList/removeAll": {
			const newTodo = [...state.todoList];
			newTodo.splice(0, action.payload);
			return {
				...state,
				todoList: newTodo,
			};
		}

		case "filter/statusChange": {
			let newTodo = state.todoList.map((todo) => {
				if (todo.id === action.payload) {
					todo = { ...todo, status: !todo.status };
				}
				return todo;
			});
			return { ...state, todoList: [...newTodo] };
		}

		case "filter/taskFilter": {
			let indexList = [];
			const newTodo = [...state.todoList];
			newTodo.forEach((item, index) => {
				if (item.status === action.payload) indexList.push(index);
			});
			indexList.forEach((item, index) => newTodo.splice(item - index, 1));
			return {
				...state,
				todoList: [...newTodo],
			};
		}

		default:
			return state;
	}
};

export default reducer;
