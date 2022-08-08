import { useRef, useState } from "react";
import "./Todo.scss";
import { taskList } from "../redux/reducers/selector";
import { useDispatch, useSelector } from "react-redux";
import {
	addTodo,
	removeTodo,
	statusFilter,
	taskFilter,
	removeAll,
} from "../redux/actions/actions";

function Todo() {
	const dispatch = useDispatch();
	const items = useSelector(taskList);
	const [task, setTask] = useState("");
	const aim = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = new Date().getTime();
		dispatch(
			addTodo({
				id: id,
				name: task,
				status: false,
			})
		);
		aim.current.focus();
		setTask("");
	};

	return (
		<div className='todo'>
			<h1 className='todo__title'>todos</h1>
			<div>
				<form onSubmit={handleSubmit} className='todo__input'>
					<input
						ref={aim}
						type='text'
						placeholder='What needs to be done ?'
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
					<span>
						<i className='bx bx-chevron-down'></i>
					</span>
				</form>
				<div className='todo__show'>
					<ul>
						{items?.map((item, index) => (
							<li className='todo__item' key={index}>
								<span
									onClick={() => dispatch(statusFilter(item.id))}
									className='todo__item-icon1'
								>
									<i className='bx bx-circle'></i>
								</span>
								<span
									onClick={() => dispatch(statusFilter(item.id))}
									style={{ visibility: item.status ? "visible" : "hidden" }}
									className='todo__item-icon2'
								>
									<i className='bx bx-check-circle'></i>
								</span>
								<label
									onClick={() => dispatch(statusFilter(item.id))}
									style={{
										textDecoration: item.status ? "line-through" : "",
										opacity: item.status ? 0.5 : 1,
										cursor: "pointer",
										transition: "0.5s",
									}}
								>
									{item.name}
								</label>
								<span
									onClick={() => dispatch(removeTodo(index))}
									className='todo__item-icon3'
								>
									<i className='bx bx-x'></i>
								</span>
							</li>
						))}
					</ul>
				</div>
				<div
					style={{ visibility: items.length ? "visible" : "hidden" }}
					className='todo__filter'
				>
					<p className='todo__filter-remain'>{items.length} tasks left</p>
					<div className='todo__filter-status'>
						<button>All</button>
						<button onClick={() => dispatch(taskFilter(false))}>Active</button>
						<button onClick={() => dispatch(taskFilter(true))}>
							Completed
						</button>
					</div>
					<p
						style={{ cursor: "pointer" }}
						className='todo__filter-clear'
						onClick={() => dispatch(removeAll(items.length))}
					>
						Clear
					</p>
				</div>
				<div
					style={{ visibility: items.length ? "visible" : "hidden" }}
					className='todo__doubleline'
				>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default Todo;
