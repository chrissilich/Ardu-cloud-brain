const API_BASE = 'http://localhost:3000/'

// <button class="program" data-program-name="off">off</button>
let programButtons = document.querySelectorAll('button.program')

programButtons.forEach(programButton => {
	programButton.addEventListener('click', () => {
		let programName = programButton.dataset.programName

		axios
			.get(API_BASE + 'program/' + programName)
			.then((response) => {
				// handle success
				console.log('SUCCESS')
				console.log(response.data)
			})
			.catch((error) => {
				// handle error
				console.log('ERROR', error)
				console.log(error);
			})
			.finally(() => {
				// always executed
				console.log('FINALLY')
			});
	})
})





let colorSave = document.querySelector('button.color-save')
colorSave.addEventListener('click', () => {

	let r = document.querySelector('input.color-r').value
	let g = document.querySelector('input.color-g').value
	let b = document.querySelector('input.color-b').value

	axios
		.get(API_BASE + 'r/' + r)
		.then((response) => {
			// handle success
			console.log('SUCCESS')
			console.log(response.data)
		})
		.catch((error) => {
			// handle error
			console.log('ERROR', error)
			console.log(error);
		})
		.finally(() => {
			// always executed
			console.log('FINALLY')
		});
	axios
		.get(API_BASE + 'g/' + g)
		.then((response) => {
			// handle success
			console.log('SUCCESS')
			console.log(response.data)
		})
		.catch((error) => {
			// handle error
			console.log('ERROR', error)
			console.log(error);
		})
		.finally(() => {
			// always executed
			console.log('FINALLY')
		});
	axios
		.get(API_BASE + 'b/' + b)
		.then((response) => {
			// handle success
			console.log('SUCCESS')
			console.log(response.data)
		})
		.catch((error) => {
			// handle error
			console.log('ERROR', error)
			console.log(error);
		})
		.finally(() => {
			// always executed
			console.log('FINALLY')
		});
})