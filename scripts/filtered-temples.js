// Dynamic Footer Dates
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedP = document.getElementById("lastModified");
if (lastModifiedP) {
    lastModifiedP.textContent = "Last Modified: " + document.lastModified;
}

// Mobile Menu Toggle
const nav = document.querySelector(".navigation");
const menuBtn = document.querySelector("#menu");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
        menuBtn.textContent = nav.classList.contains("show") ? "X" : "☰";
    });
}

// 10 Temples Array mapped to local images folder
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba_nigeria_temple.jpeg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "images/accra_ghana_temple.jpeg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "images/logan_temple.jpeg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti_temple.jpeg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl: "images/nauvoo_temple.jpeg"
    },
    {
        templeName: "Oakland California",
        location: "Oakland, California, United States",
        dedicated: "1964, November, 19",
        area: 95000,
        imageUrl: "images/oakland_california_temple.jpeg"
    },
    {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl: "images/paris_france_temple.jpeg"
    },
    {
        templeName: "Provo Utah",
        location: "Provo, Utah, United States",
        dedicated: "1972, February, 9",
        area: 128325,
        imageUrl: "images/provo_utah_temple.jpeg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "images/salt_lake_temple.jpeg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl: "images/Tokyo_Temple.jpeg"
    }
];

const container = document.getElementById("temple-cards");
const heading = document.getElementById("heading");

function displayTemples(templeList) {
    if (!container) return;
    container.innerHTML = "";

    templeList.forEach((temple) => {
        let card = document.createElement("section");
        card.className = "card";

        let title = document.createElement("h3");
        title.textContent = temple.templeName;

        let loc = document.createElement("p");
        loc.textContent = `Location: ${temple.location}`;

        let ded = document.createElement("p");
        ded.textContent = `Dedicated: ${temple.dedicated}`;

        let size = document.createElement("p");
        size.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;

        let img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";
        img.width = 400;
        img.height = 250;

        card.appendChild(title);
        card.appendChild(loc);
        card.appendChild(ded);
        card.appendChild(size);
        card.appendChild(img);

        container.appendChild(card);
    });
}

// Render initial view
displayTemples(temples);

// Filter Event Listeners
document.getElementById("home")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (heading) heading.textContent = "Home";
    displayTemples(temples);
});

document.getElementById("old")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (heading) heading.textContent = "Old Temples";
    let filtered = temples.filter((t) => {
        let year = parseInt(t.dedicated.split(",")[0]);
        return year < 1900;
    });
    displayTemples(filtered);
});

document.getElementById("new")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (heading) heading.textContent = "New Temples";
    let filtered = temples.filter((t) => {
        let year = parseInt(t.dedicated.split(",")[0]);
        return year > 2000;
    });
    displayTemples(filtered);
});

document.getElementById("large")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (heading) heading.textContent = "Large Temples";
    let filtered = temples.filter((t) => t.area > 90000);
    displayTemples(filtered);
});

document.getElementById("small")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (heading) heading.textContent = "Small Temples";
    let filtered = temples.filter((t) => t.area < 10000);
    displayTemples(filtered);
});