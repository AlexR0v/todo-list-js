const addTask = () => {

	const input = document.querySelector('input');
	const todoList = document.querySelector('.todo-list');
	const button = document.querySelector('.btn');
	const title = document.querySelector('h1');

	input.addEventListener('keydown' , addTask);
	button.addEventListener('click', addTask)

	function addTask(event){
		if(event.key === 'Enter' || event.which === 1 && input.value.length > 3){
			const task = document.createElement('li');
			task.textContent = input.value;
			task.classList.add('list-task');
			todoList.appendChild(task)

			const buttonsTask = document.createElement('ul');
			buttonsTask.classList.add('buttons');
			task.appendChild(buttonsTask);

			const del = document.createElement('li');
			del.textContent = 'delete';
			del.classList.add('delete', 'material-icons');
			buttonsTask.appendChild(del);

			const imp = document.createElement('li');
			imp.textContent = 'priority_high';
			imp.classList.add('important', 'material-icons');
			buttonsTask.appendChild(imp);

			input.value = '';
		} else if(input.value.length < 1){
			const error = document.createElement('span');
			error.textContent = 'Введите задачу';
			error.style.cssText = 'color: red; position: absolute; left: 40%; top: 26%; font-size: 15px; z-index: 5;';
			title.appendChild(error);

			setTimeout(() =>{
				error.remove()
			}, 1000)
		}
	}





};
export default addTask;