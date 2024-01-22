// fetchData3.js
function fetchData5() {
    fetch('http://192.168.0.153:8080/honda/totalfive')
        .then(response => response.json())
        .then(data => {
            const countadditional = data.countadditional;
            document.getElementById('5total').textContent = `${countadditional}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('5total').textContent = '';
        });
}

// Call fetchData3 function when the page loads
window.addEventListener('load', fetchData5);
