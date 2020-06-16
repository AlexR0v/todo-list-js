const changeTask = () => {

	const todoList = document.querySelector('.todo-list');

	todoList.addEventListener('click', evt=>{
		evt.preventDefault();
		let task = evt.target.parentElement.parentElement;
		if(evt.target.className ==='delete material-icons'){
			task.style.textDecoration = 'line-through';
			task.style.opacity = '0.5';
			task.style.color = 'black';

		}
	});
//TODO доделать это условие
	// todoList.addEventListener('click', evt=> {
	// 	evt.preventDefault();
	// 	let task = evt.target.parentElement.parentElement;
	// 	if(task.//??? && evt.target.className === 'delete material-icons'){
	// 		task.remove();
	//
	// 	}
	// });
};
export default changeTask;