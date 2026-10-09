// Array of Objects representing available services
const servicesList = [
    { name: "Solar Power Setup", category: "Energy", status: "Active" },
    { name: "AC Maintenance", category: "HVAC", status: "Active" },
    { name: "Frontend Development", category: "Web", status: "Active" }
];

// Function 1: Render service cards using Template Literals and Array method
function renderServices(items) {
    const container = document.getElementById("services-container");
    if (!container) return;

    container.innerHTML = "";
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "service-item";
        card.innerHTML = `<p><strong>${item.name}</strong> - Category: ${item.category} (${item.status})</p>`;
        container.appendChild(card);
    });
}

// Function 2: Handle localStorage counter and conditional branching
function handleBookingCount() {
    const countDisplay = document.getElementById("bookingCount");
    if (!countDisplay) return;

    let currentCount = localStorage.getItem("totalBookings") || 0;
    countDisplay.textContent = `${currentCount}`;
}

// Function 3: Set up form event listeners and DOM manipulation
function setupFormHandler() {
    const form = document.getElementById("serviceForm");
    const feedback = document.getElementById("formFeedback");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = document.getElementById("userName").value;
        const selectedService = document.getElementById("serviceSelect").value;

        // Conditional Branching
        if (nameInput.trim() === "" || selectedService === "") {
            feedback.textContent = `Please complete all fields before submitting.`;
            feedback.style.color = "red";
        } else {
            feedback.textContent = `Thank you, ${nameInput}! Your request for ${selectedService} has been recorded.`;
            feedback.style.color = "green";

            // localStorage update
            let currentCount = parseInt(localStorage.getItem("totalBookings") || "0", 10);
            currentCount += 1;
            localStorage.setItem("totalBookings", `${currentCount}`);

            handleBookingCount();
            form.reset();
        }
    });
}

// Dynamic Footer Dates
function setFooterInfo() {
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = `${new Date().getFullYear()}`;
    }

    const lastModifiedPara = document.getElementById("lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
    }
}

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    renderServices(servicesList);
    handleBookingCount();
    setupFormHandler();
    setFooterInfo();
});