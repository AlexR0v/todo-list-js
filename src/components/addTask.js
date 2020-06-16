const addTask = () => {

	const input = document.getElementById('input');
	const todoList = document.querySelector('.todo-list');
	const button = document.querySelector('.btn');
	const title = document.querySelector('h1');

	button.addEventListener('click', addTask);

	function addTask(event){
		event.preventDefault();

		if(!input.value){

			//input.value = 'Введите задачу';
			const error = document.createElement('span');
			error.textContent = 'Введите задачу';
			error.style.cssText = 'color: red; position: absolute; left: 40%; top: 26%; font-size: 15px; z-index: 5;';
			title.appendChild(error);


			setTimeout(() =>{
				//input.value = ''
				error.remove()
			}, 1000)
		} else {
			const task = document.createElement('li');
			task.textContent = input.value;
			task.classList.add('list-task');
			task.setAttribute('data-task-id', '')
			todoList.insertAdjacentElement('afterbegin', task);

			const buttonsTask = document.createElement('ul');
			buttonsTask.classList.add('buttons');
			task.appendChild(buttonsTask);

			const del = document.createElement('li');
			del.textContent = 'delete';
			del.setAttribute('title', '1 клик вычеркнуть, 2 клика удалить')
			del.classList.add('delete', 'material-icons');
			buttonsTask.appendChild(del);

			const imp = document.createElement('li');
			imp.textContent = 'priority_high';
			imp.setAttribute('title', 'отметить важным')
			imp.classList.add('important', 'material-icons');
			buttonsTask.appendChild(imp);

			input.value = '';
		}
	}





};
export default addTask;