const changeTask = ()=>{

	const task = document.querySelectorAll('.list-task');

	function changeStyleList(element){
		element.forEach(item => {
			item.addEventListener('click', () => {
				item.style.textDecoration = 'line-through';
				item.style.opacity = '0.5';
			})
		});
	}

	changeStyleList(task)
}
export default changeTask;