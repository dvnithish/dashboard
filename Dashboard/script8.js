async function fetchDataAndDisplayCounts8() {
    try {
        const response = await fetch('http://192.168.0.153:8080/honda/eight');

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const registrations = data.registrations;

        // Initialize counts for each department
        const departmentCounts = {
            'AF': 0,
            'PA': 0,
            'WE1': 0,
            'WE2': 0,
            'PBPQ': 0,
            'PQ': 0,
            'AE': 0,
            'OTHER': 0,
            // Add other departments as needed
        };

        // Calculate counts for each department
        registrations.forEach((registration) => {
            const department = registration.department;
            if (departmentCounts.hasOwnProperty(department)) {
                departmentCounts[department] += registration.count;
            }
        });

        // Display counts in the respective td tags
        for (const department in departmentCounts) {
            const id = `8${department.toLowerCase()}`;
            const count = departmentCounts[department];
            const countAdditionalElement = document.getElementById(id);
            if (countAdditionalElement) {
                countAdditionalElement.textContent = `${count}`;
            }
        }
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchDataAndDisplayCounts8();
});