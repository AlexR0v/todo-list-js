const changeTask = () => {

	const todoList = document.querySelector('.todo-list');


	//клик по корзине зачеркивает задачу
	todoList.addEventListener('click', evt=>{
		evt.preventDefault();
		let task = evt.target.parentElement.parentElement; //путь к дедушке
		if(evt.target.className ==='delete material-icons'){
			task.style.textDecoration = 'line-through';
			task.style.opacity = '0.5';
			task.style.color = 'black';
			task.setAttribute('title', '1') //возможно лишнее, нужно удалить
		}


	});

	//двойной клик по корзине удаляет элемент
	todoList.addEventListener('dblclick', (evt)=>{
		let task = evt.target.parentElement.parentElement;
		if(evt.target.className ==='delete material-icons' && task.hasAttribute('title')){
			task.remove()
		}
	})



};
export default changeTask;