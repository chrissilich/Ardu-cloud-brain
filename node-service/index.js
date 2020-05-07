const express = require('express')
const app = express()
const port = 3000
const axios = require('axios').default

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
		.finally(() => {
			// always executed
			console.log('FINALLY')
		});

})



///v1/devices/:deviceId/
app.get('/rainbow/:state', (req, res) => {

	axios({
			method: 'put',
			url: `${API_BASE}/devices/${DEVICE_ID}/`,
			data: {
				signal: req.params.state,
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
		.finally(() => {
			// always executed
			console.log('FINALLY')
		});
})

///v1/devices/:deviceId/:functionName
//https://docs.particle.io/reference/device-cloud/api/#call-a-function
app.get('/mode/:id', (req, res) => {

	axios({
			method: 'put',
			url: `${API_BASE}/devices/${DEVICE_ID}/onboardLED/`,
			data: {
				functionName: 'onboardLED',
				arg: 'toggle'
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
		.finally(() => {
			// always executed
			console.log('FINALLY')
		});
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))