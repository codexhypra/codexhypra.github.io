function lookupIP() {
    const ip = document.getElementById("ipInput").value;
  
    saveLastInput(ip);
  
    const startTime = Date.now();
  
    fetch(`http://ip-api.com/json/${ip}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('ip').innerHTML = '';
        document.getElementById('hostname').innerHTML = '';
        document.getElementById('country').innerHTML = '';
        document.getElementById('city').innerHTML = '';
        document.getElementById('isp').innerHTML = '';
        document.getElementById('as').innerHTML = '';
        document.getElementById('org').innerHTML = '';
        document.getElementById('region').innerHTML = '';
        document.getElementById('timezone').innerHTML = '';
        document.getElementById('lat').innerHTML = '';
        document.getElementById('lon').innerHTML = '';
        document.getElementById('ping').innerHTML = '';
  
        if (data.query) document.getElementById('ip').appendChild(displayData("IP", data.query));
        if (data.hostname) document.getElementById('hostname').appendChild(displayData("Hostname", data.hostname));
        if (data.country) document.getElementById('country').appendChild(displayData("Country", data.country));
        if (data.city) document.getElementById('city').appendChild(displayData("City", data.city));
        if (data.isp) document.getElementById('isp').appendChild(displayData("ISP", data.isp));
        if (data.as) document.getElementById('as').appendChild(displayData("AS", data.as));
        if (data.org) document.getElementById('org').appendChild(displayData("Organization", data.org));
        if (data.regionName) document.getElementById('region').appendChild(displayData("Region", data.regionName));
        if (data.timezone) document.getElementById('timezone').appendChild(displayData("Timezone", data.timezone));
        if (data.lat) document.getElementById('lat').appendChild(displayData("Latitude", data.lat));
        if (data.lon) document.getElementById('lon').appendChild(displayData("Longitude", data.lon));
        
        const endTime = Date.now();
        const ping = endTime - startTime;
        document.getElementById('ping').innerText = `Ping: ${ping} ms`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  

function displayData(label, value) {
    const element = document.createElement("div");
    element.innerText = `${label}: ${value}`;
    return element;
}

function saveLastInput(input) {
    localStorage.setItem("lastInput", input);
}

function getLastInput() {
    return localStorage.getItem("lastInput");
}


function goBack() {
  // Replace 'home.html' with the path to your home page
  window.location.href = 'https://web.hypra.gay/';
}

window.addEventListener("DOMContentLoaded", () => {
    const lastInput = getLastInput();
    if (lastInput) {
        document.getElementById("ipInput").value = lastInput;
    }
});
