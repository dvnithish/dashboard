// fetchData3.js
function fetchData7() {
    fetch('http://192.168.0.131:8080/honda/totalseven')
        .then(response => response.json())
        .then(data => {
            const countadditional = data.countadditional;
            document.getElementById('7total').textContent = `${countadditional}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('7total').textContent = '';
        });
}

// Call fetchData3 function when the page loads
window.addEventListener('load', fetchData7);
