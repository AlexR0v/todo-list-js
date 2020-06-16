const styles = ()=>{

	const inputCheck = document.getElementById('s1');

	inputCheck.addEventListener('click', ()=>{
		if(inputCheck.checked){
			document.body.style.setProperty('background', '#282828')
			document.body.style.setProperty('color', '#FC4445')
			document.getElementById('input').style.backgroundColor = '#8d8d8d'
			document.getElementById('input').style.borderColor = '#FC4445'
			document.querySelector('.btn').style.color = '#fff'
			document.querySelector('.btn').style.backgroundColor = '#FC4445'
			document.querySelector('.btn').style.borderColor = '#000'
			document.querySelector('.header-item').style.borderColor = '#FC4445'
			document.querySelector('.list-item').style.borderColor = '#FC4445'

		}
		if(!inputCheck.checked){
			document.body.style.setProperty('background', '#fff')
			document.body.style.setProperty('color', 'black')
			document.getElementById('input').style.backgroundColor = '#fff'
			document.getElementById('input').style.borderColor = '#fff'
			document.querySelector('.btn').style.color = '#000'
			document.querySelector('.btn').style.backgroundColor = '#fff'
			document.querySelector('.btn').style.borderColor = '#fff'
			document.querySelector('.header-item').style.borderColor = '#000'
			document.querySelector('.list-item').style.borderColor = '#000'

		}
	})

}
export default styles;