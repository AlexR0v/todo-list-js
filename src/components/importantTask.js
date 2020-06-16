const importantTask = () => {

	/* тут происходит полный 3,14здец,
	но как решить по другому я пока не придумал.
	Если будут добавлять события, то этот код работать не будет... ушел думать...*/

	const todoList = document.querySelector('.list-item');

	todoList.addEventListener('click', evt=>{
		const task = evt.target;
		let a = evt.target.parentNode.parentNode.firstElementChild.children[0]; //путь к элементу списка
		let a1 = evt.target.parentNode.parentNode.firstElementChild.children[1];
		let a2 = evt.target.parentNode.parentNode.firstElementChild.children[2];
		let b = evt.target.parentNode.children[0]//путь к кнопке
		let b1 = evt.target.parentNode.children[1]
		let b2 = evt.target.parentNode.children[2]
		if(task == b){ //если нажатая кнопка совпадает с элементов, то action
			a.style.color = 'red'
		} else if(task == b1){
			a1.style.color = 'red'
		} else if(task == b2){
			a2.style.color = 'red'
		}
	})



};
export default importantTask;