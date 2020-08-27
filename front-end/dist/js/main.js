"use strict";

// const API_BASE = 'http://localhost:3000/'
var API_BASE = 'http://circuslabs.net:1437/';
var statusP = document.querySelector('p.status');

var fetchStatus = function fetchStatus() {
  axios.get(API_BASE + 'status/').then(function (response) {
    // handle success
    console.log('SUCCESS');
    console.log(response.data);
    statusP.innerHTML = 'Device: ' + response.data.diagnostics.payload.service.device.status;
    statusP.innerHTML += '<br>Timestamp: ' + response.data.diagnostics.updated_at;
  }).catch(function (error) {
    // handle error
    console.log('ERROR', error);
    console.log(error);
  }).finally(function () {
    // always executed
    console.log('FINALLY');
  });
};

setInterval(fetchStatus, 3000);
fetchStatus();
var programButtons = document.querySelectorAll('a.program');
var programProgress = document.querySelector('.progress-program');
programButtons.forEach(function (programButton) {
  programButton.addEventListener('click', function () {
    var programName = programButton.dataset.programName;
    programProgress.style.display = 'block';
    axios.get(API_BASE + 'program/' + programName).then(function (response) {
      // handle success
      console.log('SUCCESS');
      console.log(response.data);
    }).catch(function (error) {
      // handle error
      console.log('ERROR', error);
      console.log(error);
    }).finally(function () {
      // always executed
      console.log('FINALLY');
      programProgress.style.display = 'none';
    });
  });
});
var colorSave = document.querySelector('a.color-save');
var colorProgress = document.querySelector('.progress-color');
colorSave.addEventListener('click', function () {
  colorProgress.style.display = 'block';
  var r = document.querySelector('input.color-r').value;
  var g = document.querySelector('input.color-g').value;
  var b = document.querySelector('input.color-b').value;
  axios.get(API_BASE + 'r/' + r).then(function (response) {
    // handle success
    console.log('SUCCESS');
    console.log(response.data);
  }).catch(function (error) {
    // handle error
    console.log('ERROR', error);
    console.log(error);
  }).finally(function () {
    // always executed
    console.log('FINALLY');
  });
  axios.get(API_BASE + 'g/' + g).then(function (response) {
    // handle success
    console.log('SUCCESS');
    console.log(response.data);
  }).catch(function (error) {
    // handle error
    console.log('ERROR', error);
    console.log(error);
  }).finally(function () {
    // always executed
    console.log('FINALLY');
  });
  axios.get(API_BASE + 'b/' + b).then(function (response) {
    // handle success
    console.log('SUCCESS');
    console.log(response.data);
  }).catch(function (error) {
    // handle error
    console.log('ERROR', error);
    console.log(error);
  }).finally(function () {
    // always executed
    console.log('FINALLY');
    colorProgress.style.display = 'none';
  });
});
var brightnessSave = document.querySelector('a.brightness-save');
var brightnessProgress = document.querySelector('.progress-brightness');
brightnessSave.addEventListener('click', function () {
  brightnessProgress.style.display = 'block';
  var b = document.querySelector('input.brightness').value;
  axios.get(API_BASE + 'brightness/' + b).then(function (response) {
    // handle success
    console.log('SUCCESS');
    console.log(response.data);
  }).catch(function (error) {
    // handle error
    console.log('ERROR', error);
    console.log(error);
  }).finally(function () {
    // always executed
    brightnessProgress.style.display = 'none';
    console.log('FINALLY');
  });
});
//# sourceMappingURL=main.js.map
