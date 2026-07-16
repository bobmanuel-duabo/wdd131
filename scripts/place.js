// Footer Information
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Static Weather Values
const temperature = 28; // °C
const windSpeed = 12;   // km/h

// Wind Chill Formula (Metric)
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// Display Wind Chill
const windChill = document.querySelector("#windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChill.textContent = "N/A";
}