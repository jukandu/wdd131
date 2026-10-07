// Array of product objects as specified in course materials
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("product-select");

  // Dynamically populate select element options using product array
  if (selectElement) {
    products.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.id; // Sets option value to id
      option.textContent = product.name; // Displays product name
      selectElement.appendChild(option);
    });
  }

  // Dynamic Footer Info
  const currentYearSpan = document.getElementById("currentyear");
  const lastModifiedP = document.getElementById("lastModified");

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
  }
});