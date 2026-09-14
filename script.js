// Show a message when the page is loaded
window.addEventListener("load", function () {
    console.log("Sarthak's portfolio loaded successfully!");
});

// Highlight navigation link when clicked
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});