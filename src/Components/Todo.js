import "./Todo.scss";

function Todo() {
	const items = [
		{
			name: "eat",
			status: "done",
		},
	];

	return (
		<div className='todo'>
			<h1 className='todo__title'>todos</h1>
			<div>
				<div className='todo__input'>
					<input type='text' placeholder={"What needs to be done ?"} />
					<span>
						<i className='bx bx-chevron-down'></i>
					</span>
				</div>
				<ul>
					{items.map((item, index) => (
						<li className='todo__item' key={index}>
							<span className='todo__item-icon1'>
								<i className='bx bx-circle'></i>
							</span>
							<span className='todo__item-icon2'>
								<i className='bx bx-check-circle'></i>
							</span>
							<label>{item.name}</label>
						</li>
					))}
				</ul>
				<div className='todo__filter'>
					<p className='todo__filter-remain'>0 tasks left</p>
					<div className='todo__filter-status'>
						<button>All</button>
						<button>Active</button>
						<button>Completed</button>
					</div>
					<p style={{ cursor: "pointer" }} className='todo__filter-clear'>
						Clear completed
					</p>
				</div>
				<div className='todo__doubleline'>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default Todo;
