export const taskList = (state) => state.todoList;
export const completed = (state) => {
	state.todoList.filter((item) => item.status === true);
};
export const active = (state) => {
	state.todoList.filter((item) => item.status === false);
};
