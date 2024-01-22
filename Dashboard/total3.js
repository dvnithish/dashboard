// fetchData3.js
function fetchData3() {
    fetch('http://192.168.0.153:8080/honda/totalthree')
        .then(response => response.json())
        .then(data => {
            const countadditional = data.countadditional;
            document.getElementById('3total').textContent = `${countadditional}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('3total').textContent = '';
        });
}

// Call fetchData3 function when the page loads
window.addEventListener('load', fetchData3);
