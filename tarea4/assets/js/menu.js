document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navUl = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        navUl.classList.toggle("mostrar");
    });
});
