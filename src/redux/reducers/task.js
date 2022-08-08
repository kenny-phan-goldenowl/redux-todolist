import { TaskActionType } from "../actionTypes";

const initState = {
	tasks: {},
	loading: false,
};

const task = (state = initState, action) => {
	switch (action.type) {
		case TaskActionType.FAIL_REQUEST_TASK:
			return { ...state, loading: false };

		case TaskActionType.REQUEST_TASK_ADD:
			return { ...state, loading: true };

		case TaskActionType.TASK_ADD: {
			const id = new Date().getTime();
			return {
				...state,
				tasks: {
					...state.tasks,
					[id]: {
						id,
						label: action.payload.label,
						status: false,
					},
				},
			};
		}

		case TaskActionType.REQUEST_TASK_TOGGLE_STATUS:
			return { ...state, loading: true };

		case TaskActionType.TASK_TOGGLE_STATUS: {
			const { id } = action.payload;
			console.log("🚀 ~ file: task.js ~ line 32 ~ task ~ id ", id);
			return {
				...state,
				tasks: {
					...state.tasks,
					[id]: {
						...state.tasks[id],
						status: !state.tasks?.[id].status,
					},
				},
				loading: false,
			};
		}

		default:
			return state;
	}
};

export default task;
