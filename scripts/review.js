document.addEventListener("DOMContentLoaded", () => {
  const counterDisplay = document.getElementById("review-counter");

  // Get current counter value from localStorage or default to 0
  let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

  // Increment completion count for this new submission
  numReviews++;

  // Save updated total back to localStorage
  localStorage.setItem("numReviews-ls", numReviews);

  // Update the HTML display on review.html
  if (counterDisplay) {
    counterDisplay.textContent = numReviews;
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