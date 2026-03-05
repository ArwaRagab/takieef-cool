let mobileMenu = document.querySelector(".mobile-menu");
let navLinks = document.querySelector(".nav-links");
let icon = document.querySelector(".mobile-menu i");
let links = document.querySelectorAll(".nav-links a");

mobileMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");

  // نغير شكل الأيقونة
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});
// يقفل المنيو لما أضغط على لينك
links.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    // يرجع الأيقونة Bars
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});