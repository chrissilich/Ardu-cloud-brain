const express = require('express')
const cors = require('cors')
const app = express()
const port = 1437
const axios = require('axios').default


app.use(cors())


// https://docs.particle.io/reference/developer-tools/cli/#particle-token-create
// particle token create --never-expires
const API_TOKEN = 'b45f1be51d73e96c0bc4677b327ee0b2eb03b13b'

const DEVICE_ID = '1a0025000c47363433353735'
const API_BASE = 'https://api.particle.io/v1'

// https://docs.particle.io/reference/device-cloud/api/
// https://api.particle.io/v1/diagnostics/1a0025000c47363433353735/last // last device vitals


/*
example particle API URIs
https://api.particle.io/v1/devices/mydevice/wakeup
https://api.particle.io/v1/devices/mydevice/wakeup
*/


app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/status', async (req, res) => {
	axios
		.get(`${API_BASE}/diagnostics/${DEVICE_ID}/last`, {
			headers: {
				'Authorization': 'Bearer ' + API_TOKEN
			},
			data: {}
		})
		.then((response) => {
			// handle success
			console.log('SUCCESS')
			res.send(response.data)
		})
		.catch((error) => {
			// handle error
			console.log('ERROR', error)
			res.send(error);
		})
		.then(() => {
			// always executed
			console.log('FINALLY')
			res.end('got it')
		});

})



let rainbowState = 0

///v1/devices/:deviceId/
app.get('/rainbow/:state', (req, res) => {

	if (req.params.state == 'toggle') {
		if (rainbowState == 0) {
			rainbowState = 1
		} else {
			rainbowState = 0
		}
	} else if (req.params.state == 'off' || req.params.state == 0) {
		rainbowState = 0
	} else if (req.params.state == 'on' || req.params.state == 1) {
		rainbowState = 1
	}

	axios({
			method: 'put',
			url: `${API_BASE}/devices/${DEVICE_ID}/`,
			data: {
				signal: rainbowState,
			},
			headers: {
				'Authorization': 'Bearer ' + API_TOKEN
			}
		})
		.then((response) => {
			// handle success
			console.log('SUCCESS')
			res.send(response.data)
		})
		.catch((error) => {
			// handle error
			console.log('ERROR', error)
			res.send(error);
		})
		.then(() => {
			// always executed
			console.log('FINALLY')
			res.end('got it')
		});
})

///v1/devices/:deviceId/:functionName
//https://docs.particle.io/reference/device-cloud/api/#call-a-function
app.get('/program/:id', (req, res) => {

	let ajax = {
		method: 'POST',
		url: `${API_BASE}/devices/${DEVICE_ID}/program/`,
		data: {
			arg: req.params.id
		},
		headers: {
			'Authorization': 'Bearer ' + API_TOKEN
		}
	}

	console.log('post', ajax)

	axios(ajax)
		.then((response) => {
			// handle success
			console.log('SUCCESS')
			res.send(response.data)
		})
		.catch((error) => {
			// handle error
			console.log('ERROR', error)
			res.send(error);
		})
		.then(() => {
			// always executed
			console.log('FINALLY')
			res.end('got it')
		});
})



app.get('/r/:num', (req, res) => {

	let ajax = {
		method: 'POST',
		url: `${API_BASE}/devices/${DEVICE_ID}/r/`,
		data: {
			arg: req.params.num
		},
		headers: {
			'Authorization': 'Bearer ' + API_TOKEN
		}
	}

	console.log('post', ajax)

	axios(ajax)
		.then((response) => {
			// handle success
			console.log('SUCCESS')
			res.send(response.data)
		})
		.catch((error) => {
			// handle error
			console.log('ERROR', error)
			res.send(error);
		})
		.then(() => {
			// always executed
			console.log('FINALLY')
			res.end('got it')
		});
})

app.get('/g/:num', (req, res) => {

	let ajax = {
		method: 'POST',
		url: `${API_BASE}/devices/${DEVICE_ID}/g/`,
		data: {
			arg: req.params.num
		},
		headers: {
			'Authorization': 'Bearer ' + API_TOKEN
		}
	}

	console.log('post', ajax)

	axios(ajax)
		.then((response) => {
			// handle success
			console.log('SUCCESS')
			res.send(response.data)
		})
		.catch((error) => {
			// handle error
			console.log('ERROR', error)
			res.send(error);
		})
		.then(() => {
			// always executed
			console.log('FINALLY')
			res.end('got it')
		});
})
app.get('/b/:num', (req, res) => {

	let ajax = {
		method: 'POST',
		url: `${API_BASE}/devices/${DEVICE_ID}/b/`,
		data: {
			arg: req.params.num
		},
		headers: {
			'Authorization': 'Bearer ' + API_TOKEN
		}
	}

	console.log('post', ajax)

	axios(ajax)
		.then((response) => {
			// handle success
			console.log('SUCCESS')
			res.send(response.data)
		})
		.catch((error) => {
			// handle error
			console.log('ERROR', error)
			res.send(error);
		})
		.then(() => {
			// always executed
			console.log('FINALLY')
			res.end('got it')
		});
})


app.get('/brightness/:b', (req, res) => {

	let ajax = {
		method: 'POST',
		url: `${API_BASE}/devices/${DEVICE_ID}/brightness/`,
		data: {
			arg: req.params.b
		},
		headers: {
			'Authorization': 'Bearer ' + API_TOKEN
		}
	}

	console.log('post', ajax)

	axios(ajax)
		.then((response) => {
			// handle success
			console.log('SUCCESS')
			res.send(response.data)
		})
		.catch((error) => {
			// handle error
			console.log('ERROR', error)
			res.send(error);
		})
		.then(() => {
			// always executed
			console.log('FINALLY')
			res.end('got it')
		});
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))