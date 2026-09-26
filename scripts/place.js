// Dynamic footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Static weather values
const temp = 10;
const wind = 10;

// One-line function returning wind chill (Metric)
const calculateWindChill = (t, s) => (13.12 + (0.6215 * t) - (11.37 * Math.pow(s, 0.16)) + (0.3965 * t * Math.pow(s, 0.16))).toFixed(1);

const chillOutput = document.getElementById("chill");

// Check metric conditions: Temp <= 10°C and Wind > 4.8 km/h
if (temp <= 10 && wind > 4.8) {
    chillOutput.textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
    chillOutput.textContent = "N/A";
}