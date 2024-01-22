// fetchData3.js
function fetchData6() {
    fetch('http://192.168.0.131:8080/honda/totalsix')
        .then(response => response.json())
        .then(data => {
            const countadditional = data.countadditional;
            document.getElementById('6total').textContent = `${countadditional}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('6total').textContent = '';
        });
}

// Call fetchData3 function when the page loads
window.addEventListener('load', fetchData6);
