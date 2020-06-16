const changeTask = () => {

	const todoList = document.querySelector('.list-item');

	todoList.addEventListener('dblclick', evt=>{
		const task = evt.target;
		if(task.className === 'list-task' ){
			task.style.textDecoration = 'line-through';
			task.style.opacity = '0.5';
		}
	})

	// todoList.addEventListener('dblclick', evt =>{
	// 	const task = evt.target;
	// 	if(task.style.textDecoration === 'line-through'){
	// 		task.style.textDecoration = 'none';
	// 		task.style.opacity = '1';
	// 	}
	// })

};
export default changeTask;