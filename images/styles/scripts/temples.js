// Footer Dates
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

year.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;


// Hamburger Menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }

});