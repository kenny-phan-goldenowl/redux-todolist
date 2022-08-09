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

		case "todoList/doneAll": {
			let newTodo = state.todoList.map((todo) => {
				todo = { ...todo, status: !todo.status };
				return todo;
			});
			return { ...state, todoList: [...newTodo] };
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

		case "filter/taskFilterDone": {
			let newTodo = state.todoList.filter((todo) => {
				if (todo.status === true) return true;
			});
			return { ...state, todoList: newTodo };
		}

		case "filter/taskFilterActive": {
			let newTodo = state.todoList.filter((todo) => {
				if (todo.status === false) return true;
			});
			return { ...state, todoList: newTodo };
		}

		default:
			return state;
	}
};

export default reducer;
