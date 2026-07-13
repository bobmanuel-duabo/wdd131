const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("hide");

    if (navigation.classList.contains("hide")) {
        menuButton.innerHTML = "&#9776;";
    } else {
        menuButton.innerHTML = "&times;";
    }

});

// Footer

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;