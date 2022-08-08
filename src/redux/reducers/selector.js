export const fitlerStatus = (state) => state.todoList.status;
export const taskList = (state) => state.todoList;

export const result = (state) => {
	let task = state.todoList.status.filter((item) => item === false);
	return task;
};
