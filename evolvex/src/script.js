document.addEventListener('DOMContentLoaded', function () {
    const calculatorForm = document.getElementById('calculator-form');
    const calculateBtn = document.getElementById('calculate-btn');
    const carbonFootprintResult = document.getElementById('carbon-footprint-result');
    const carbonFootprintChart = document.getElementById('carbon-footprint-chart');

    let chart;

    // Function to check if the user is logged in
    function isLoggedIn() {
        return localStorage.getItem('userLoggedIn') === 'true';
    }

    // Function to handle the calculate button click
    calculateBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!isLoggedIn()) {
            // Redirect to login or signup page if not logged in
            window.location.href = 'login.html'; // or 'signup.html' based on your flow
            return;
        }

        const energyConsumption = parseInt(document.getElementById('energy-consumption').value);
        const fuelUsage = parseInt(document.getElementById('fuel-usage').value);
        const emissionsMining = parseInt(document.getElementById('emissions-mining').value);
        const emissionsTransportation = parseInt(document.getElementById('emissions-transportation').value);

        const totalEmissions = energyConsumption * 0.5 + fuelUsage * 0.2 + emissionsMining + emissionsTransportation;
        const carbonFootprint = totalEmissions * 0.00062;

        carbonFootprintResult.textContent = `Your carbon footprint is approximately ${carbonFootprint.toFixed(2)} tons CO2e per year.`;

        const chartData = {
            labels: ['Energy Consumption', 'Fuel Usage', 'Emissions from Mining', 'Emissions from Transportation'],
            datasets: [{
                label: 'Emissions (kg CO2e)',
                data: [energyConsumption * 0.5, fuelUsage * 0.2, emissionsMining, emissionsTransportation],
                backgroundColor: ['#FF69B4', '#33CC33', '#6666CC', '#CC0000']
            }]
        };

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(carbonFootprintChart, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Emissions Breakdown'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
});
