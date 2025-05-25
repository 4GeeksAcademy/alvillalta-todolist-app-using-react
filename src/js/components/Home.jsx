//  Hooks
import { useState } from "react";

//  FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const ToDoList = () => {

	//  State variables
	const [todoInput, setTodoInput] = useState("");
	const [todoList, setTodoList] = useState([]);

	//  Event handlers
	const handleTodoInput = (event) => {
		setTodoInput(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (todoInput.trim() != "") {
			setTodoList([...todoList, {id: todoList.length + 1, task: todoInput}]);
			setTodoInput("");
		}
	};

	const handleDeleteTodo = (onClickItem) => {
		setTodoList(todoList.filter((todoListItem) => todoListItem != onClickItem));
	}

	// Tasks left
	function tasksLeft(todoListArray) {
		if (todoListArray.length > 1) {
			return todoListArray.length + " tasks left";
		} else if (todoListArray.length === 1) {
			return "1 task left";
		} else return "No tasks left";
	};


	return (
		<div className="container">
			<div className="row my-5">
				<h1 className="text-center text-secondary">todos</h1>
				<div className="col-10 col-md-8 col-lg-6 m-auto p-0 text-start bg-white shadow">
					<form onSubmit={handleSubmit}>
						<div className="p-3">
							<input className="input-class form-control p-0 border-0 mx-1" type="text" placeholder="Type any task here"
								onChange={handleTodoInput} value={todoInput}></input>
						</div>
					</form>
					<ul className="list-group rounded-0">
						{todoList.map((item) => {
							return (
								<li key={item.id} className="list-group-item p-3 border-start-0 border-end-0 d-flex justify-content-between">
									<p className="m-0 mx-1 text-secondary">{item.task}</p>
									<button onClick={() => handleDeleteTodo(item)} className="close-icon-class border-0 bg-transparent float-end"><FontAwesomeIcon icon={faXmark} className="text-secondary" size="xs" /></button>
								</li>
							);
						})}
						<li className="tasks-left-class list-group-item m-0 p-2 text-secondary">
							{/* {todoList.length ? todoList.length + " tasks left" : "No tasks left"} */}
							{tasksLeft(todoList)}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ToDoList;