const changeTask = () => {

	const task = document.querySelectorAll('.list-task');

	function changeStyleList(element){
		element.forEach(item => {
			item.style.textDecoration = 'none';
			item.addEventListener('click' , () => {
				if(item.style.textDecoration === 'none'){
					item.style.textDecoration = 'line-through';
					item.style.opacity = '0.5';
				}else{
					item.style.textDecoration = 'none';
					item.style.opacity = '1';
				}
			});
		});
	}

	changeStyleList(task);
};
export default changeTask;