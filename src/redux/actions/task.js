import TaskActionType from "../actionTypes";

const failRequest = () => ({
	type: TaskActionType.FAIL_REQUEST_TASK,
});

const requestToggleStatus = () => ({
	type: TaskActionType.REQUEST_TASK_TOGGLE_STATUS,
});

const toggleStatus = (id = "") => ({
	type: TaskActionType.TASK_TOGGLE_STATUS,
	payload: {
		id,
	},
});

const requestAdd = () => ({
	type: TaskActionType.REQUEST_TASK_ADD,
});

const add = (label) => ({
	type: TaskActionType.TASK_ADD,
	payload: {
		label,
	},
});

const TaskAction = {
	failRequest,
	requestToggleStatus,
	toggleStatus,
	requestAdd,
	add,
};

export default TaskAction;
