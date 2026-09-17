// Populate current copyright year dynamically
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Populate last modified date dynamically
const lastModifiedParagraph = document.getElementById("lastModified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
}

// Hamburger menu toggle interaction
const mainNav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

if (hambutton && mainNav) {
    hambutton.addEventListener("click", () => {
        mainNav.classList.toggle("show");
        hambutton.classList.toggle("open");
    });
}