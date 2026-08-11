document.addEventListener('DOMContentLoaded', () => {
    const tempInput = document.getElementById('tempInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertBtn = document.getElementById('convertBtn');
    const errorMessage = document.getElementById('errorMessage');

    const celsiusResult = document.getElementById('celsiusResult');
    const fahrenheitResult = document.getElementById('fahrenheitResult');
    const kelvinResult = document.getElementById('kelvinResult');

    function resetResults() {
        celsiusResult.textContent = '--';
        fahrenheitResult.textContent = '--';
        kelvinResult.textContent = '--';
    }

    function convertTemperature() {
        const rawValue = tempInput.value.trim();
        errorMessage.textContent = '';

        // Validate empty input
        if (rawValue === '') {
            errorMessage.textContent = 'Please enter a value.';
            resetResults();
            return;
        }

        // Validate non-numeric input
        const numericValue = Number(rawValue);
        if (isNaN(numericValue)) {
            errorMessage.textContent = 'Invalid input. Please enter a valid number.';
            resetResults();
            return;
        }

        const unit = unitSelect.value;
        let tempInCelsius;

        // Convert input to baseline Celsius
        if (unit === 'C') {
            tempInCelsius = numericValue;
        } else if (unit === 'F') {
            tempInCelsius = (numericValue - 32) * (5 / 9);
        } else if (unit === 'K') {
            tempInCelsius = numericValue - 273.15;
        }

        // Check for Absolute Zero violation (-273.15 °C)
        if (tempInCelsius < -273.15) {
            errorMessage.textContent = 'Value below absolute zero (−273.15°C / 0K).';
            resetResults();
            return;
        }

        // Compute output values
        const celsius = tempInCelsius;
        const fahrenheit = (tempInCelsius * 9 / 5) + 32;
        const kelvin = tempInCelsius + 273.15;

        // Render results formatted to 2 decimal places
        celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
        fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
        kelvinResult.textContent = `${kelvin.toFixed(2)} K`;
    }

    convertBtn.addEventListener('click', convertTemperature);

    // Optional: Trigger calculation when pressing 'Enter' key in the input
    tempInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            convertTemperature();
        }
    });
});