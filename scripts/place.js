// Function to calculate wind chill in Celsius
function calculateWindChill(temp, speed) {
  // Metric formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
  return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  const tempElement = document.querySelector("#temp");
  const windElement = document.querySelector("#wind");
  const chillElement = document.querySelector("#chill");

  const temperature = parseFloat(tempElement.textContent);
  const windSpeed = parseFloat(windElement.textContent);

  // Wind chill condition: Temp <= 10°C and Wind speed > 4.8 km/h
  if (temperature <= 10 && windSpeed > 4.8) {
    chillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
  } else {
    chillElement.textContent = "N/A";
  }

  // Footer dynamic dates
  document.querySelector("#currentyear").textContent = new Date().getFullYear();
  document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
});