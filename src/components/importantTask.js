const importantTask = () => {


	const todoList = document.querySelector('.todo-list');

	//клик по вопрозительному знаку возвращает зачеркнутую задачу
	todoList.addEventListener('click', evt=>{
		evt.preventDefault();
		let task = evt.target.parentElement.parentElement;
		if(task.style.textDecoration === 'line-through'){
			task.style.color = 'black';
			task.style.fontWeight = 'normal';
			task.style.textDecoration = 'none';
			task.style.opacity = '1';

			//выделяет важну. задачу
		} else if(evt.target.className ==='important material-icons'){
			task.style.color = 'red';
			task.style.fontWeight = 'bold'
			//если выделили, удалили, а потом вернули возвращаем непрозрачность
		} else if(task.style.textDecoration === 'none'){
			//task.style.fontWeight = 'normal';
			task.style.opacity = '1';

		}
	})
};
export default importantTask;