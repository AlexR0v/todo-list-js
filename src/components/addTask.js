const addTask = () => {

	const deleteTask = document.getElementById('delete');
	const importantTask = document.getElementById('important');
	const inputText = document.getElementById('input');
	const input = document.querySelector('.task');
	const listTask = document.querySelector('.todo-list');
	const button = document.querySelector('.btn');
	const title = document.querySelector('h1');

	input.addEventListener('keydown' , addTask);
	button.addEventListener('click' , addTask);

	function addTask(event){
		if(event.key === 'Enter' || event.which === 1 && inputText.value){

			//добавляем новую задачу
			const newTask = document.createElement('li');
			listTask.appendChild(newTask);
			newTask.textContent = inputText.value;
			newTask.classList.add('list-task');
			newTask.style.textDecoration = 'none';

			//добавляем кнопку удалить
			const newDelete = document.createElement('li');
			deleteTask.appendChild(newDelete);
			newDelete.classList.add('delete' , 'material-icons');
			newDelete.textContent = 'delete';

			const newImportant = document.createElement('li');
			importantTask.appendChild(newImportant);
			newImportant.classList.add('important' , 'material-icons');
			newImportant.textContent = 'priority_high';

			inputText.value = '';
		}else{
			const errorText = document.createElement('span');
			errorText.style.cssText = 'color: red; ' +
				'position: absolute; ' +
				'left: 40%; font-size: 15px; z-index: 5; top: 26%';
			errorText.textContent = 'Введите задачу!';
			title.appendChild(errorText);

			setTimeout(() => {
				errorText.remove();
			} , 1000);
		}

	}

};
export default addTask;