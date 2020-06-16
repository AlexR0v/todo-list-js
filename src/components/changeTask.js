const changeTask = () => {

	const todoList = document.querySelector('.todo-list');


	//клик по корзине зачеркивает задачу
	todoList.addEventListener('click', evt=>{
		evt.preventDefault();
		let task = evt.target.closest('[data-task-id]');//определяем родителя кнопки
		if(evt.target.className ==='delete material-icons'){
			task.style.textDecoration = 'line-through';
			task.style.opacity = '0.5';
			task.style.color = 'black';
		}


	});

	//двойной клик по корзине удаляет элемент
	todoList.addEventListener('dblclick', (evt)=>{
		let task = evt.target.closest('[data-task-id]');
		if(evt.target.className ==='delete material-icons'){
			task.remove()
		}
	})



};
export default changeTask;