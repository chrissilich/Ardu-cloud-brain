// const API_BASE = 'http://localhost:3000/'
const API_BASE = 'http://circuslabs.net:1437/'



let statusP = document.querySelector('p.status')
let fetchStatus = () => {
	axios
		.get(API_BASE + 'status/')
		.then((response) => {
			// handle success
			console.log('SUCCESS')
			console.log(response.data)
			statusP.innerHTML = 'Device: ' + response.data.diagnostics.payload.service.device.status
			statusP.innerHTML += '<br>Timestamp: ' + response.data.diagnostics.updated_at

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
}
setInterval(fetchStatus, 3000)
fetchStatus()



let programButtons = document.querySelectorAll('a.program')
let programProgress = document.querySelector('.progress-program')

programButtons.forEach(programButton => {
	programButton.addEventListener('click', () => {
		let programName = programButton.dataset.programName
		programProgress.style.display = 'block'
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
				programProgress.style.display = 'none'
			});
	})
})





let colorSave = document.querySelector('a.color-save')
let colorProgress = document.querySelector('.progress-color')

colorSave.addEventListener('click', () => {

	colorProgress.style.display = 'block'

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
			colorProgress.style.display = 'none'

		});
})




let brightnessSave = document.querySelector('a.brightness-save')
let brightnessProgress = document.querySelector('.progress-brightness')
brightnessSave.addEventListener('click', () => {

	brightnessProgress.style.display = 'block'

	let b = document.querySelector('input.brightness').value

	axios
		.get(API_BASE + 'brightness/' + b)
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
			brightnessProgress.style.display = 'none'
			console.log('FINALLY')
		})
})