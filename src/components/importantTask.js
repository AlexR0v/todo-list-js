const importantTask = () => {

	/* тут происходит полный 3,14здец,
	но как решить по другому я пока не придумал.
	Если будут добавлять события, то этот код работать не будет... ушел думать...*/

	const todoList = document.querySelector('.todo-list');

	todoList.addEventListener('click', evt=>{
		evt.preventDefault();
		let task = evt.target.parentElement.parentElement;
		if(task.style.textDecoration === 'line-through'){
			task.style.color = 'black';
			task.style.fontWeight = 'normal';
			task.style.textDecoration = 'none';
			task.style.opacity = '1';

		} else if(evt.target.className ==='important material-icons'){
			task.style.color = 'red';
			task.style.fontWeight = 'bold'
		} else if(task.style.textDecoration === 'none'){
			task.style.fontWeight = 'normal';
			task.style.opacity = '1';

		}
	})
};
export default importantTask;