// fetchData2.js
function fetchData1() {
    fetch('http://192.168.0.153:8080/honda/totalone')
        .then(response => response.json())
        .then(data => {
            const countadditional = data.countadditional;
            document.getElementById('1total').textContent = `${countadditional}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('1total').textContent = '';
        });
}

// Call fetchData2 function when the page loads
window.addEventListener('load', fetchData1);
