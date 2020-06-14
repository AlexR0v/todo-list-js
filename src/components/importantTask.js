const importantTask = () => {

	const important = document.querySelectorAll('.important');
	const task = document.querySelectorAll('.list-task');

	function changeImportantStyleList(element){
		element.forEach(item => {
			item.addEventListener('click', () => {
				task.forEach(el => {
					el.style.color = '#fa0404';
					el.style.fontWeight = 'bold'
				})

			})
		})
	}

	changeImportantStyleList(important)

};
export default importantTask;