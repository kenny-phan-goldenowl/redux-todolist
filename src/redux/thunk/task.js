import { TaskAction } from "../actions";

const addTask = (label) => (dispatch) => {
	try {
		dispatch(TaskAction.addTodo());
		dispatch(TaskAction.add(label));
		return { status: true };
	} catch (error) {
		dispatch(TaskAction.failRequest());
		return { status: false };
	}
};

const toggleTaskStatus = (id) => (dispatch) => {
	try {
		dispatch(TaskAction.requestToggleStatus());
		dispatch(TaskAction.toggleStatus(id));
		return { status: true };
	} catch (error) {
		dispatch(TaskAction.failRequest());
		return { staus: false };
	}
};

export { addTask, toggleTaskStatus };
