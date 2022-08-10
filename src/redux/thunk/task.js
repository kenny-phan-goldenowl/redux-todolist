import {
	addTodo,
	removeTodo,
	removeAll,
	doneAll,
	statusFilter,
} from "../actions/actions";

export const todoThunk = (item) => (dispatch) => {
	try {
		dispatch(addTodo(item));
		dispatch(removeTodo());
		dispatch(removeAll());
	} catch (error) {
		return error;
	}
};

export const filterThunk = () => (dispatch) => {
	dispatch(doneAll());
	dispatch(statusFilter());
};
