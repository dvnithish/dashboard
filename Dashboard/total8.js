// fetchData3.js
function fetchData8() {
    fetch('http://192.168.0.131:8080/honda/totaleight')
        .then(response => response.json())
        .then(data => {
            const countadditional = data.countadditional;
            document.getElementById('8total').textContent = `${countadditional}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('8total').textContent = '';
        });
}

// Call fetchData3 function when the page loads
window.addEventListener('load', fetchData8);
